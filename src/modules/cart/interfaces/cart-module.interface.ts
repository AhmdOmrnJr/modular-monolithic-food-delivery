import type { Prisma } from '../../../generated/prisma';

export const CART_MODULE_API = 'CART_MODULE_API';

export interface ICartModuleApi {
  clearCartByCustomerId(customerId: string, tx?: Prisma.TransactionClient): Promise<void>;
  lockCart(customerId: string, tx?: Prisma.TransactionClient): Promise<void>;
  unlockCart(customerId: string, tx?: Prisma.TransactionClient): Promise<void>;
  getCartWithCartItemsByCustomerId(customerId: string, tx?: Prisma.TransactionClient): Promise<any>;
}
