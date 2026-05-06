import { Injectable, Logger } from '@nestjs/common';
import { IPaymentStrategy } from '../interfaces/payment-strategy.interface';
import { PaymentResult, CaptureResult, RefundResult } from '../interfaces/payment-result.interface';

@Injectable()
export class CashOnDeliveryStrategy implements IPaymentStrategy {
  private readonly logger = new Logger(CashOnDeliveryStrategy.name);

  async processPayment(
    amount: number,
    metadata: { orderId: string; customerId: string; restaurantId: string; email: string; savedMethodData?: Record<string, any> },
    idempotencyKey: string,
  ): Promise<PaymentResult> {
    this.logger.log(`Processing payment of ${amount}`);
    return {
      success: true,
      transactionId: `cod_${Date.now()}`,
      message: 'Cash on delivery confirmed',
      requiresAction: false,
    };
  }

  async capturePayment(transactionId: string, amount?: number): Promise<CaptureResult> {
    this.logger.log(`Capture request for ${transactionId} (No-op)`);
    return { success: true, message: 'COD — no capture needed' };
  }

  async refund(transactionId: string, amount: number): Promise<RefundResult> {
    this.logger.log(`Refund request for ${transactionId} (No-op)`);
    return {
      success: true,
      refundId: `ref_cod_${Date.now()}`,
      message: 'COD refund logged (manual action required)',
    };
  }
}
