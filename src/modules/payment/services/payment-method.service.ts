import { Injectable } from '@nestjs/common';
import { PaymentMethodRepository } from '../repositories/payment-method.repository';
import { Prisma } from '../../../generated/prisma';

@Injectable()
export class PaymentMethodService {
  constructor(private readonly paymentMethodRepository: PaymentMethodRepository) {}

  async create(data: Prisma.PaymentMethodUncheckedCreateInput) {
    return this.paymentMethodRepository.create(data);
  }

  async findById(paymentMethodId: string) {
    return this.paymentMethodRepository.findById(paymentMethodId);
  }
}
