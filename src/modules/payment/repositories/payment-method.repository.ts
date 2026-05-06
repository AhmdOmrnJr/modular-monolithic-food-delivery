import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { Prisma, PaymentMethod } from '../../../generated/prisma';

@Injectable()
export class PaymentMethodRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.PaymentMethodUncheckedCreateInput): Promise<PaymentMethod> {
    return this.prisma.paymentMethod.create({ data });
  }

  async findById(paymentMethodId: string): Promise<PaymentMethod | null> {
    return this.prisma.paymentMethod.findUnique({
      where: { paymentMethodId },
    });
  }

  async findBySettingsId(preferredPaymentSettingsId: string): Promise<PaymentMethod[]> {
    return this.prisma.paymentMethod.findMany({
      where: { preferredPaymentSettingsId },
    });
  }
}
