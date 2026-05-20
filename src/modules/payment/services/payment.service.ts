import { Injectable, InternalServerErrorException, UnprocessableEntityException, NotFoundException, Logger, Inject, BadRequestException } from '@nestjs/common';
import { PaymentStrategyFactory } from '../strategies/payment-strategy.factory';
import { PreferredPaymentSettingsService } from './preferred-payment-settings.service';
import { PaymentAttemptService } from './payment-attempt.service';
import { PaymentMethodService } from './payment-method.service';
import { PaymentAttemptStatus } from '../../../generated/prisma';
import { PaymentResult } from '../interfaces/payment-result.interface';
import { ProcessPaymentDto } from '../dto/process-payment.dto';
import { STRIPE_CLIENT } from '../constants/payment.constants';
import type { ICartModuleApi } from '../../cart/interfaces/cart-module.interface';
import { CART_MODULE_API } from '../../cart/interfaces/cart-module.interface';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);

  constructor(
    private readonly strategyFactory: PaymentStrategyFactory,
    private readonly preferredPaymentSettingsService: PreferredPaymentSettingsService,
    private readonly paymentAttemptService: PaymentAttemptService,
    private readonly paymentMethodService: PaymentMethodService,
    @Inject(STRIPE_CLIENT) private readonly stripeClient: any,
    @Inject(CART_MODULE_API) private readonly cartApi: ICartModuleApi,
  ) {}

  async processPayment(dto: ProcessPaymentDto): Promise<PaymentResult> {
    const { customerId, orderId, amount, customerEmail, restaurantId, requestTimestamp, paymentProvider, paymentMethodId } = dto;
    const idempotencyKey = `order_${orderId}`;

    // --- Layer 1: DB-level idempotency ---
    const existing = await this.paymentAttemptService.findAttempt(idempotencyKey);
    if (existing) {
      if (existing.status === PaymentAttemptStatus.SUCCESS) {
        throw new UnprocessableEntityException('Order has already been paid');
      }
      if (existing.status === PaymentAttemptStatus.PENDING) {
        const responseData = existing.responseData as any;
        if (responseData?.clientSecret && existing.transactionId) {
          this.logger.log(`Returning existing PENDING PaymentIntent for order ${orderId}`);
          return {
            success: true,
            clientSecret: responseData.clientSecret,
            transactionId: existing.transactionId,
            requiresAction: true,
          };
        }
      }
    }

    // --- Resolve provider and method ---
    let finalProvider = paymentProvider;
    let finalMethodId = paymentMethodId;
    let providerData: any = {};

    if (paymentMethodId && !paymentProvider) {
      const method = await this.paymentMethodService.findById(paymentMethodId);
      if (!method) throw new UnprocessableEntityException('Selected payment method not found');
      const data = method.paymentMethodData as any;
      finalProvider = data.provider;
      providerData = data;
    } else if (!paymentProvider && !paymentMethodId) {
      try {
        const settings = await this.preferredPaymentSettingsService.getCustomerSettings(customerId);
        const preferredMethod = settings?.paymentMethods?.find((pm) => pm.paymentMethodId === settings.paymentMethodId);

        if (preferredMethod) {
          const data = preferredMethod.paymentMethodData as any;
          finalProvider = data.provider;
          providerData = data;
          finalMethodId = preferredMethod.paymentMethodId;
        } else {
          finalProvider = 'stripe';
        }
      } catch (e) {
        finalProvider = 'stripe';
      }
    }

    if (!finalProvider) {
      throw new UnprocessableEntityException('Unable to determine payment provider');
    }

    const strategy = this.strategyFactory.getStrategy(finalProvider);

    await this.paymentAttemptService.upsertPendingAttempt(idempotencyKey, orderId, customerId, finalProvider, requestTimestamp);

    // --- Layer 2: API idempotency ---
    try {
      const result = await strategy.processPayment(
        amount,
        { orderId, customerId, restaurantId, email: customerEmail, savedMethodData: providerData },
        idempotencyKey,
      );

      if (result.requiresAction) {
        await this.paymentAttemptService.updateStatus(
          idempotencyKey,
          PaymentAttemptStatus.PENDING,
          result.transactionId,
          { clientSecret: result.clientSecret },
        );
      } else {
        await this.paymentAttemptService.updateStatus(
          idempotencyKey,
          PaymentAttemptStatus.SUCCESS,
          result.transactionId,
          { message: result.message },
        );
      }

      return result;
    } catch (error: any) {
      this.logger.error(`Payment failed for customer ${customerId}:`, error.stack);
      throw new InternalServerErrorException('Payment processing failed', error.message);
    }
  }

  async capturePayment(orderId: string, amount?: number): Promise<void> {
    const idempotencyKey = `order_${orderId}`;
    const attempt = await this.paymentAttemptService.findAttempt(idempotencyKey);

    if (!attempt) throw new NotFoundException(`No payment attempt for order ${orderId}`);
    if (attempt.status === PaymentAttemptStatus.SUCCESS) return;
    
    if (attempt.status !== PaymentAttemptStatus.AUTHORIZED) 
      throw new UnprocessableEntityException(`Cannot capture payment in status ${attempt.status}`);
    
    if (!attempt.transactionId) throw new InternalServerErrorException('Missing transactionId for capture');

    const strategy = this.strategyFactory.getStrategy(attempt.provider);
    await strategy.capturePayment(attempt.transactionId, amount);

    await this.paymentAttemptService.updateStatus(idempotencyKey, PaymentAttemptStatus.SUCCESS, attempt.transactionId, {
      capturedAt: new Date().toISOString(),
    });

    // We do not rely solely on the async Stripe webhook (payment_intent.succeeded)
    // which may arrive seconds later. The webhook handler is idempotent and will
    // simply skip if the attempt is already SUCCESS.
    await this.cartApi.clearCartByCustomerId(attempt.customerId ?? '');
  }

  async voidHold(orderId: string): Promise<void> {
    const idempotencyKey = `order_${orderId}`;
    const attempt = await this.paymentAttemptService.findAttempt(idempotencyKey);

    if (!attempt || attempt.status !== PaymentAttemptStatus.AUTHORIZED || !attempt.transactionId) return;

    if (attempt.provider === 'stripe') {
      await this.stripeClient.paymentIntents.cancel(attempt.transactionId);
    }

    await this.paymentAttemptService.updateStatus(idempotencyKey, PaymentAttemptStatus.FAILED, attempt.transactionId, {
      error: 'Hold voided due to cancellation',
    });
  }

  /**
   * DEV ONLY — manually reconciles an order whose webhook was never delivered.
   */
  async reconcileOrder(orderId: string): Promise<any> {
    const idempotencyKey = `order_${orderId}`;
    const attempt = await this.paymentAttemptService.findAttempt(idempotencyKey);

    if (!attempt) throw new NotFoundException(`No PaymentAttempt found for order ${orderId}`);
    if (attempt.status === PaymentAttemptStatus.SUCCESS) return { message: 'Already reconciled' };
    if (!attempt.transactionId) throw new BadRequestException('No transactionId on this attempt');

    const paymentIntent = await this.stripeClient.paymentIntents.retrieve(attempt.transactionId);

    if (paymentIntent.status !== 'succeeded') {
      throw new BadRequestException(`PaymentIntent status is ${paymentIntent.status}, cannot reconcile.`);
    }

    const { customerId } = paymentIntent.metadata as { customerId: string };

    // Update status locally
    await this.paymentAttemptService.updateStatus(
      idempotencyKey,
      PaymentAttemptStatus.SUCCESS,
      paymentIntent.id,
      { amount: paymentIntent.amount_received / 100, reconciledManually: true },
    );

    await this.cartApi.clearCartByCustomerId(customerId);

    return { success: true, message: 'Reconciled successfully', orderId };
  }
}
