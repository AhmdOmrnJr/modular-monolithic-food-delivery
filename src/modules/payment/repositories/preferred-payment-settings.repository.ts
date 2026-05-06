import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { PreferredPaymentSettings } from '../../../generated/prisma';

@Injectable()
export class PreferredPaymentSettingsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByCustomerId(customerId: string): Promise<PreferredPaymentSettings & { paymentMethods?: any[] } | null> {
    return this.prisma.preferredPaymentSettings.findUnique({
      where: { customerId },
      include: { paymentMethods: true },
    });
  }

  async create(customerId: string, paymentMethodId: string): Promise<PreferredPaymentSettings> {
    return this.prisma.preferredPaymentSettings.create({
      data: {
        customerId,
        paymentMethodId,
      },
    });
  }

  async updatePaymentMethodId(
    preferredPaymentSettingsId: string,
    paymentMethodId: string,
  ): Promise<PreferredPaymentSettings> {
    return this.prisma.preferredPaymentSettings.update({
      where: { preferredPaymentSettingsId },
      data: { paymentMethodId },
    });
  }
}
