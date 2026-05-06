import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerRepository } from '../repositories/customer.repository';
import { Prisma } from '../../../generated/prisma';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async createCustomer(data: Prisma.CustomerUncheckedCreateInput, tx?: Prisma.TransactionClient) {
    return this.customerRepository.createCustomer(data, tx);
  }

  async getCustomerByCustomerId(customerId: string) {
    return this.customerRepository.getCustomerByCustomerId(customerId);
  }

  async deactivateAccount(customerId: string) {
    const customer = await this.customerRepository.getCustomerByCustomerId(customerId);
    if (!customer) throw new NotFoundException('Customer Not found');

    return this.customerRepository.deactivateAccount(customerId);
  }

  async updateDeactivateAccount(customerId: string) {
    return this.customerRepository.updateDeactivateAccount(customerId);
  }

  async getCustomerByUserId(userId: string) {
    return this.customerRepository.getCustomerByUserId(userId);
  }

  // Address Management
  async addAddress(customerId: string, data: any) {
    if (data.isPrimary) {
      await this.customerRepository.unsetPrimaryAddress(customerId);
    }
    return this.customerRepository.addAddress(customerId, data);
  }

  async updateAddress(customerId: string, addressId: string, data: any) {
    if (data.isPrimary) {
      await this.customerRepository.unsetPrimaryAddress(customerId, addressId);
    }
    return this.customerRepository.updateAddress(customerId, addressId, data);
  }

  async deleteAddress(customerId: string, addressId: string) {
    return this.customerRepository.removeAddress(customerId, addressId);
  }

  async getAddresses(customerId: string) {
    return this.customerRepository.listAddresses(customerId);
  }

  async getAddressById(customerId: string, addressId: string) {
    return this.customerRepository.findAddressById(customerId, addressId);
  }

  // NOTE: Order and Rating integrations will be uncommented when OrderModule and RatingModule are migrated

  async findCustomerOrdersByCustomerId(customerId: string) {
    // return this.orderService.findAllCustomerOrdersByCustomerId(customerId);
    throw new Error('OrderModule not yet migrated');
  }

  async findCustomerOrderByCustomerId(customerId: string, orderId: string) {
    // return this.orderService.findOrderByOrderIdAndCustomerId(orderId, customerId);
    throw new Error('OrderModule not yet migrated');
  }

  async createRatingByCustomer(customerId: string, data: any) {
    /*
    const payload: CreateCustomerRatingDto = {
      customerId,
      restaurantId: data.restaurantId,
      ratingScore: data.ratingScore,
      review: data.review,
    };
    return this.ratingService.createRatingByCustomer(payload);
    */
    throw new Error('RatingModule not yet migrated');
  }
}
