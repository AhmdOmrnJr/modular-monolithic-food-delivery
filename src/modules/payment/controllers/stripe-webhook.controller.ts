import { Controller, Post, Req, Res, Headers, Logger, Inject } from '@nestjs/common';
import type { Request, Response } from 'express';
import type { RawBodyRequest } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ConfigService } from '@nestjs/config';
import { PaymentAttemptService } from '../services/payment-attempt.service';
import { PaymentMethodService } from '../services/payment-method.service';
import { PreferredPaymentSettingsService } from '../services/preferred-payment-settings.service';
import { PaymentMethodRepository } from '../repositories/payment-method.repository';
import { PreferredPaymentSettingsRepository } from '../repositories/preferred-payment-settings.repository';
import { PaymentAttemptStatus } from '../../../generated/prisma';
import { STRIPE_CLIENT, PAYMENT_EVENTS } from '../constants/payment.constants';
import { PaymentAuthorizedPayload, PaymentCapturedPayload, PaymentFailedPayload } from '../interfaces/payment-event.interface';

@Controller('webhooks/stripe')
export class StripeWebhookController {
  private readonly logger = new Logger(StripeWebhookController.name);

  constructor(
    @Inject(STRIPE_CLIENT) private readonly stripeClient: any,
    private readonly configService: ConfigService,
    private readonly paymentAttemptService: PaymentAttemptService,
    private readonly paymentMethodService: PaymentMethodService,
    private readonly preferredPaymentSettingsRepository: PreferredPaymentSettingsRepository,
    private readonly paymentMethodRepository: PaymentMethodRepository,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @Post()
  async handleStripeWebhook(
    @Req() req: RawBodyRequest<Request>,
    @Res() res: Response,
    @Headers('stripe-signature') signature: string,
  ) {
    if (!signature) {
      return res.status(400).send('Webhook Error: Missing stripe-signature header');
    }

    let event: any;
    try {
      const webhookSecret = this.configService.getOrThrow<string>('STRIPE_WEBHOOK_SECRET');
      // req.rawBody is a raw Buffer because main.ts uses { rawBody: true }
      if (!req.rawBody) {
        return res.status(400).send('Webhook Error: Missing raw body');
      }
      event = this.stripeClient.webhooks.constructEvent(req.rawBody, signature, webhookSecret);
    } catch (err: any) {
      this.logger.error(`Stripe Signature Verification Failed: ${err.message}`);
      this.logger.warn(`💡 TROUBLESHOOTING TIPS FOR STRIPE WEBHOOKS:`);
      this.logger.warn(`1. Ensure your STRIPE_WEBHOOK_SECRET in .env exactly matches the signing secret printed by your 'stripe listen' command (starts with whsec_).`);
      this.logger.warn(`2. IMPORTANT: If your NestJS app is running inside a Docker container, updating the .env file on the host DOES NOT reload it inside the container! You MUST restart the container for the new secret to load: run 'docker restart food-delivery-app' or 'docker compose down && docker compose up -d'.`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    this.logger.log(`Received event: ${event.type}`);

    try {
      switch (event.type) {
        case 'payment_intent.succeeded':
          await this.handlePaymentCaptured(event.data.object);
          break;
        case 'payment_intent.amount_capturable_updated':
          await this.handlePaymentAuthorized(event.data.object);
          break;
        case 'payment_intent.payment_failed':
          await this.handlePaymentFailure(event.data.object);
          break;
        default:
          this.logger.log(`Unhandled event type: ${event.type}`);
      }

      res.json({ received: true });
    } catch (err: any) {
      this.logger.error(`Handler error for ${event.type}: ${err.message}`, err.stack);
      res.status(500).send(`Handler Error: ${err.message}`);
    }
  }

  private async handlePaymentAuthorized(paymentIntent: any) {
    const { orderId, customerId } = paymentIntent.metadata as { orderId: string; customerId: string };

    if (!orderId) {
      this.logger.error('payment_intent.amount_capturable_updated missing orderId in metadata');
      return;
    }

    const idempotencyKey = `order_${orderId}`;
    const attempt = await this.paymentAttemptService.findAttempt(idempotencyKey);

    if (attempt?.status === PaymentAttemptStatus.AUTHORIZED || attempt?.status === PaymentAttemptStatus.SUCCESS) {
      return; // Already processed — idempotent
    }

    await this.paymentAttemptService.updateStatus(
      idempotencyKey,
      PaymentAttemptStatus.AUTHORIZED,
      paymentIntent.id,
      { amount: paymentIntent.amount / 100 },
    );

    // Save payment method for future use (non-fatal)
    await this.savePaymentMethodInfo(paymentIntent, customerId);

    this.eventEmitter.emit(PAYMENT_EVENTS.AUTHORIZED, {
      orderId,
      customerId,
      transactionId: paymentIntent.id,
      amount: paymentIntent.amount / 100,
    } as PaymentAuthorizedPayload);
  }

  private async handlePaymentCaptured(paymentIntent: any) {
    const { orderId, customerId } = paymentIntent.metadata as { orderId: string; customerId: string };

    if (!orderId) {
      this.logger.error('payment_intent.succeeded missing orderId in metadata');
      return;
    }

    const idempotencyKey = `order_${orderId}`;
    const attempt = await this.paymentAttemptService.findAttempt(idempotencyKey);

    if (attempt?.status === PaymentAttemptStatus.SUCCESS) {
      return; // Already processed — idempotent
    }

    await this.paymentAttemptService.updateStatus(
      idempotencyKey,
      PaymentAttemptStatus.SUCCESS,
      paymentIntent.id,
      { amount: paymentIntent.amount_received / 100 },
    );

    this.eventEmitter.emit(PAYMENT_EVENTS.CAPTURED, {
      orderId,
      customerId,
      transactionId: paymentIntent.id,
      amount: paymentIntent.amount_received / 100,
    } as PaymentCapturedPayload);
  }

  private async handlePaymentFailure(paymentIntent: any) {
    const { orderId, customerId } = paymentIntent.metadata as { orderId: string; customerId: string };

    if (!orderId) return;

    const idempotencyKey = `order_${orderId}`;
    const attempt = await this.paymentAttemptService.findAttempt(idempotencyKey);

    if (attempt?.status === PaymentAttemptStatus.FAILED) return;

    await this.paymentAttemptService.updateStatus(
      idempotencyKey,
      PaymentAttemptStatus.FAILED,
      paymentIntent.id,
      { error: paymentIntent.last_payment_error },
    );

    this.eventEmitter.emit(PAYMENT_EVENTS.FAILED, {
      orderId,
      customerId,
      transactionId: paymentIntent.id,
      error: paymentIntent.last_payment_error?.message,
    } as PaymentFailedPayload);
  }

  /**
   * Saves the Stripe payment method to the customer's preferred payment settings.
   * Non-fatal: errors are logged as warnings, never thrown.
   */
  private async savePaymentMethodInfo(paymentIntent: any, customerId: string) {
    if (!paymentIntent.setup_future_usage || paymentIntent.setup_future_usage !== 'off_session') return;
    if (!paymentIntent.payment_method || !customerId) return;

    try {
      // Get or create preferred payment settings via repository (not direct Prisma)
      let settings = await this.preferredPaymentSettingsRepository.findByCustomerId(customerId);
      if (!settings) {
        settings = await this.preferredPaymentSettingsRepository.create(customerId, 'temp');
      }

      // Retrieve the Stripe payment method to get card details
      const pm = await this.stripeClient.paymentMethods.retrieve(paymentIntent.payment_method as string);
      let methodName = 'Credit Card';
      if (pm.card) {
        methodName = `${pm.card.brand.toUpperCase()} ****${pm.card.last4}`;
      }

      // Check if this Stripe PM is already saved (deduplication by stripePaymentMethodId)
      const existingPms = await this.paymentMethodRepository.findBySettingsId(settings!.preferredPaymentSettingsId);
      const alreadySaved = existingPms.some(
        (dbPm: any) => (dbPm.paymentMethodData as any)?.stripePaymentMethodId === paymentIntent.payment_method,
      );

      if (!alreadySaved) {
        const newPm = await this.paymentMethodRepository.create({
          paymentMethodName: methodName,
          paymentMethodData: {
            provider: 'stripe',
            stripePaymentMethodId: paymentIntent.payment_method,
            stripeCustomerId: paymentIntent.customer ?? null,
          },
          preferredPaymentSettingsId: settings!.preferredPaymentSettingsId,
        });

        // If settings were just created with 'temp', point it to the real first method
        if (settings!.paymentMethodId === 'temp') {
          await this.preferredPaymentSettingsRepository.updatePaymentMethodId(
            settings!.preferredPaymentSettingsId,
            newPm.paymentMethodId,
          );
        }
      }
    } catch (err: any) {
      this.logger.warn(`Non-fatal: could not save payment method for customer ${customerId}: ${err.message}`);
    }
  }
}
