import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { Prisma, Refund } from '../../../generated/prisma';

@Injectable()
export class RefundRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.RefundUncheckedCreateInput): Promise<Refund> {
    return this.prisma.refund.create({
      data,
    });
  }

  async findByRefundId(refundId: string): Promise<Refund | null> {
    return this.prisma.refund.findUnique({
      where: { refundId },
    });
  }
}
