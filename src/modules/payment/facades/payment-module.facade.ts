import { Injectable } from '@nestjs/common';
import { IPaymentModuleApi } from '../interfaces/payment-module.interface';
import { PaymentService } from '../services/payment.service';
import { PaymentAttemptService } from '../services/payment-attempt.service';
import type { ProcessPaymentDto } from '../dto/process-payment.dto';
import type { PaymentResult } from '../interfaces/payment-result.interface';
@Injectable()
export class PaymentModuleFacade implements IPaymentModuleApi {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly paymentAttemptService: PaymentAttemptService,
  ) {}

  async capturePayment(orderId: string, amount?: number): Promise<void> {
    return this.paymentService.capturePayment(orderId, amount);
  }

  async voidHold(orderId: string): Promise<void> {
    return this.paymentService.voidHold(orderId);
  }

  async processPayment(dto: ProcessPaymentDto): Promise<PaymentResult> {
    return this.paymentService.processPayment(dto);
  }

  async upsertPendingAttempt(key: string, orderId: string | null, customerId: string, provider: string, timestamp: Date): Promise<any> {
    return this.paymentAttemptService.upsertPendingAttempt(key, orderId, customerId, provider, timestamp);
  }

  async findAttempt(key: string): Promise<any> {
    return this.paymentAttemptService.findAttempt(key);
  }

  async finalizeAttempt(key: string, success: boolean, transactionId: string, data: object, timestamp: Date): Promise<any> {
    return this.paymentAttemptService.finalizeAttempt(key, success, transactionId, data, timestamp);
  }

  async updateOrderId(key: string, orderId: string): Promise<any> {
    return this.paymentAttemptService.updateOrderId(key, orderId);
  }
}
