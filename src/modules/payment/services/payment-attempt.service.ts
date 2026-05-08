import { Injectable } from '@nestjs/common';
import { PaymentAttemptRepository } from '../repositories/payment-attempt.repository';
import { PaymentAttemptStatus } from '../../../generated/prisma';

@Injectable()
export class PaymentAttemptService {
  constructor(private readonly paymentAttemptRepository: PaymentAttemptRepository) {}

  async findAttempt(key: string) {
    return this.paymentAttemptRepository.findByIdempotencyKey(key);
  }

  async findByOrderId(orderId: string) {
    return this.paymentAttemptRepository.findByOrderId(orderId);
  }

  async upsertPendingAttempt(key: string, orderId: string | null, customerId: string | null, provider: string, timestamp?: Date) {
    return this.paymentAttemptRepository.upsertPendingAttempt(
      {
        idempotencyKey: key,
        orderId,
        customerId,
        status: PaymentAttemptStatus.PENDING,
        provider,
      },
      timestamp,
    );
  }

  async finalizeAttempt(key: string, success: boolean, transactionId: string, data: any, timestamp?: Date) {
    const status = success ? PaymentAttemptStatus.SUCCESS : PaymentAttemptStatus.FAILED;
    return this.updateStatus(key, status, transactionId, data, timestamp);
  }

  async updateStatus(
    key: string,
    status: PaymentAttemptStatus,
    transactionId?: string | null,
    data: any = {},
    timestamp?: Date,
  ) {
    return this.paymentAttemptRepository.updateStatus(key, status, transactionId, data, timestamp);
  }

  async updateOrderId(key: string, orderId: string) {
    return this.paymentAttemptRepository.updateOrderId(key, orderId);
  }
}
