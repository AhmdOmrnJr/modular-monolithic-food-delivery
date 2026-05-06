import { Injectable, Inject, Logger } from '@nestjs/common';
import { IPaymentStrategy } from '../interfaces/payment-strategy.interface';
import { PaymentResult, CaptureResult, RefundResult } from '../interfaces/payment-result.interface';
import { STRIPE_CLIENT } from '../constants/payment.constants';
import Stripe from 'stripe';

@Injectable()
export class StripeStrategy implements IPaymentStrategy {
  private readonly logger = new Logger(StripeStrategy.name);

  constructor(@Inject(STRIPE_CLIENT) private readonly stripeClient: any) {}

  async processPayment(
    amount: number,
    metadata: {
      orderId: string;
      customerId: string;
      restaurantId: string;
      email: string;
      savedMethodData?: Record<string, any>;
    },
    idempotencyKey: string,
  ): Promise<PaymentResult> {
    this.logger.log(`Processing payment for order ${metadata.orderId}, amount ${amount}`);

    const intentParams: any = {
      amount: Math.round(amount * 100),
      currency: 'usd',
      metadata: {
        orderId: metadata.orderId,
        customerId: metadata.customerId,
        restaurantId: metadata.restaurantId,
      },
      automatic_payment_methods: { enabled: true },
      capture_method: 'manual',
    };

    if (metadata.savedMethodData && metadata.savedMethodData.stripePaymentMethodId) {
      intentParams.payment_method = metadata.savedMethodData.stripePaymentMethodId;
      if (metadata.savedMethodData.stripeCustomerId) {
        intentParams.customer = metadata.savedMethodData.stripeCustomerId;
      }
    } else {
      intentParams.setup_future_usage = 'off_session';
    }

    const paymentIntent = await this.stripeClient.paymentIntents.create(intentParams, {
      idempotencyKey,
    });

    this.logger.log(`PaymentIntent created: ${paymentIntent.id}`);

    return {
      success: true,
      transactionId: paymentIntent.id,
      clientSecret: paymentIntent.client_secret || undefined,
      requiresAction: true,
    };
  }

  async capturePayment(transactionId: string, amount?: number): Promise<CaptureResult> {
    try {
      this.logger.log(`Capturing payment_intent ${transactionId}`);
      const captureParams: any = {};
      if (amount !== undefined) {
        captureParams.amount_to_capture = Math.round(amount * 100);
      }
      await this.stripeClient.paymentIntents.capture(transactionId, captureParams);
      return { success: true };
    } catch (error: any) {
      this.logger.error('Stripe capture failed:', error.stack);
      return {
        success: false,
        message: error.message || 'Stripe capture failed',
      };
    }
  }

  async refund(transactionId: string, amount: number): Promise<RefundResult> {
    try {
      this.logger.log(`Refunding payment_intent ${transactionId} amount ${amount}`);
      const refund = await this.stripeClient.refunds.create({
        payment_intent: transactionId,
        amount: Math.round(amount * 100),
      });

      return {
        success: refund.status === 'succeeded',
        refundId: refund.id,
        message: 'Refund processed successfully',
      };
    } catch (error: any) {
      this.logger.error('Stripe refund failed:', error.stack);
      return {
        success: false,
        refundId: '',
        message: error.message || 'Stripe refund failed',
      };
    }
  }
}
