import { PaymentResult, CaptureResult, RefundResult } from './payment-result.interface';

export interface IPaymentStrategy {
  processPayment(
    amount: number,
    metadata: {
      orderId: string;
      customerId: string;
      restaurantId: string;
      email: string;
      savedMethodData?: Record<string, any>;
    },
    idempotencyKey: string,
  ): Promise<PaymentResult>;

  capturePayment(transactionId: string, amount?: number): Promise<CaptureResult>;

  refund(transactionId: string, amount: number): Promise<RefundResult>;
}
