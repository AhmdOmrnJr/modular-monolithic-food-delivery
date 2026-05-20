import type { ProcessPaymentDto } from '../dto/process-payment.dto';
import type { PaymentResult } from './payment-result.interface';

export const PAYMENT_MODULE_API = 'PAYMENT_MODULE_API';

export interface IPaymentModuleApi {
  capturePayment(orderId: string, amount?: number): Promise<void>;
  voidHold(orderId: string): Promise<void>;
  processPayment(dto: ProcessPaymentDto): Promise<PaymentResult>;
  upsertPendingAttempt(key: string, orderId: string | null, customerId: string, provider: string, timestamp: Date): Promise<any>;
  findAttempt(key: string): Promise<any>;
  finalizeAttempt(key: string, success: boolean, transactionId: string, data: object, timestamp: Date): Promise<any>;
  updateOrderId(key: string, orderId: string): Promise<any>;
}
