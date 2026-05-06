import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { PaymentAttempt, Prisma, PaymentAttemptStatus } from '../../../generated/prisma';

@Injectable()
export class PaymentAttemptRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: Prisma.PaymentAttemptUncheckedCreateInput,
    timestamp?: Date,
  ): Promise<PaymentAttempt> {
    return this.prisma.paymentAttempt.create({
      data: {
        ...data,
        ...(timestamp && { createdAt: timestamp, updatedAt: timestamp }),
      },
    });
  }

  async upsertPendingAttempt(
    data: Prisma.PaymentAttemptUncheckedCreateInput,
    timestamp?: Date,
  ): Promise<PaymentAttempt> {
    const baseData = {
      ...data,
      status: PaymentAttemptStatus.PENDING,
      transactionId: null,
      responseData: Prisma.JsonNull,
      ...(timestamp && { createdAt: timestamp, updatedAt: timestamp }),
    };
    
    return this.prisma.paymentAttempt.upsert({
      where: { idempotencyKey: data.idempotencyKey },
      create: baseData,
      update: {
        status: PaymentAttemptStatus.PENDING,
        transactionId: null,
        responseData: Prisma.JsonNull,
        ...(timestamp && { updatedAt: timestamp }),
      },
    });
  }

  async findByIdempotencyKey(key: string): Promise<PaymentAttempt | null> {
    return this.prisma.paymentAttempt.findUnique({ where: { idempotencyKey: key } });
  }

  async updateStatus(
    key: string,
    status: PaymentAttemptStatus,
    transactionId?: string | null,
    responseData?: any,
    timestamp?: Date,
  ): Promise<PaymentAttempt> {
    return this.prisma.paymentAttempt.update({
      where: { idempotencyKey: key },
      data: {
        status,
        ...(transactionId !== undefined && { transactionId }),
        ...(responseData !== undefined && { responseData }),
        ...(timestamp && { updatedAt: timestamp }),
      },
    });
  }

  async updateOrderId(key: string, orderId: string): Promise<PaymentAttempt> {
    return this.prisma.paymentAttempt.update({
      where: { idempotencyKey: key },
      data: { orderId },
    });
  }

  async findByOrderId(orderId: string): Promise<PaymentAttempt | null> {
    return this.prisma.paymentAttempt.findFirst({
      where: {
        orderId,
        status: PaymentAttemptStatus.SUCCESS,
      },
    });
  }
}
