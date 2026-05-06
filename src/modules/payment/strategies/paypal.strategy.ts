import { Injectable, Logger } from '@nestjs/common';
import { IPaymentStrategy } from '../interfaces/payment-strategy.interface';
import { PaymentResult, CaptureResult, RefundResult } from '../interfaces/payment-result.interface';

@Injectable()
export class PayPalStrategy implements IPaymentStrategy {
  private readonly logger = new Logger(PayPalStrategy.name);

  async processPayment(
    amount: number,
    metadata: { orderId: string; customerId: string; restaurantId: string; email: string; savedMethodData?: any },
    idempotencyKey: string,
  ): Promise<PaymentResult> {
    this.logger.log(`Processing payment of ${amount} with key ${idempotencyKey}`);
    return {
      success: true,
      transactionId: `paypal_${Date.now()}`,
      message: 'Payment processed successfully via PayPal',
      requiresAction: true,
      clientSecret: '', 
    };
  }

  async capturePayment(transactionId: string, amount?: number): Promise<CaptureResult> {
    this.logger.log(`Capture request for ${transactionId} (No-op stub)`);
    return { success: true, message: 'PayPal capture stub' };
  }

  async refund(transactionId: string, amount: number): Promise<RefundResult> {
    this.logger.log(`Refunding transaction ${transactionId}`);
    return {
      success: true,
      refundId: `ref_paypal_${Date.now()}`,
      message: 'Refund successful',
    };
  }
}
