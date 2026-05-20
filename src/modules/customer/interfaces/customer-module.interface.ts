import { Customer, Prisma } from '../../../generated/prisma';

export interface ICustomerModuleApi {
  getCustomerByUserId(userId: string): Promise<Customer | null>;
  createCustomer(data: Prisma.CustomerUncheckedCreateInput, tx?: Prisma.TransactionClient): Promise<Customer>;
}

export const CUSTOMER_MODULE_API = Symbol('CUSTOMER_MODULE_API');
