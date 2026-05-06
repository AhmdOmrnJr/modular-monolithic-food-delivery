import { Injectable } from '@nestjs/common';
import { Prisma } from '../../../generated/prisma';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { AddressQueries } from '../../../shared/prisma/queries/address.queries';

@Injectable()
export class CustomerRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly addressQueries: AddressQueries,
  ) {}

  async findCustomerOrders(customerId: string) {
    return this.prisma.order.findMany({
      where: { customerId },
      select: {
        orderId: true,
        totalAmount: true,
        orderStatusDetails: {
          select: {
            orderStatusId: true,
            orderStatusName: true,
          },
        },
      },
    });
  }

  async findCustomerOrderByCustomerId(customerId: string, orderId: string) {
    return this.prisma.order.findFirst({
      where: { orderId, customerId },
      select: {
        orderId: true,
        totalAmount: true,
        orderStatusDetails: {
          select: {
            orderStatusId: true,
            orderStatusName: true,
          },
        },
      },
    });
  }

  async getCustomerByCustomerId(customerId: string) {
    return this.prisma.customer.findUnique({ where: { customerId } });
  }

  async getCustomerByUserId(userId: string) {
    return this.prisma.customer.findUnique({ where: { userId } });
  }

  async createCustomer(data: Prisma.CustomerUncheckedCreateInput, tx?: Prisma.TransactionClient) {
    return (tx || this.prisma).customer.create({ data });
  }

  async updateDeactivateAccount(customerId: string) {
    return this.prisma.customer.update({
      where: { customerId },
      data: {
        deactivatedAt: new Date(),
      },
    });
  }

  async deactivateAccount(customerId: string) {
    return this.updateDeactivateAccount(customerId);
  }

  // Address Management via JSONB Extension
  async addAddress(customerId: string, data: any) {
    return this.addressQueries.add('customer', customerId, data);
  }

  async unsetPrimaryAddress(customerId: string, addressId?: string) {
    return this.addressQueries.unsetPrimary('customer', customerId, addressId);
  }

  async updateAddress(customerId: string, addressId: string, data: any) {
    return this.addressQueries.update('customer', customerId, addressId, data);
  }

  async removeAddress(customerId: string, addressId: string) {
    return this.addressQueries.remove('customer', customerId, addressId);
  }

  async listAddresses(customerId: string) {
    return this.addressQueries.list('customer', customerId);
  }

  async findAddressById(customerId: string, addressId: string) {
    return this.addressQueries.findById('customer', customerId, addressId);
  }
}
