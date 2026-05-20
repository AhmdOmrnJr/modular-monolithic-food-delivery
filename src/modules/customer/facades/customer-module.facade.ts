import { Injectable } from '@nestjs/common';
import { ICustomerModuleApi } from '../interfaces/customer-module.interface';
import { CustomerService } from '../services/customer.service';
import { Customer, Prisma } from '../../../generated/prisma';

@Injectable()
export class CustomerModuleFacade implements ICustomerModuleApi {
  constructor(private readonly customerService: CustomerService) {}

  async getCustomerByUserId(userId: string): Promise<Customer | null> {
    return this.customerService.getCustomerByUserId(userId);
  }

  async createCustomer(data: Prisma.CustomerUncheckedCreateInput, tx?: Prisma.TransactionClient): Promise<Customer> {
    return this.customerService.createCustomer(data, tx);
  }
}
