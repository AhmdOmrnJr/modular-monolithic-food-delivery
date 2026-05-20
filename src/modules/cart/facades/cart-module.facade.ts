import { Injectable } from '@nestjs/common';
import { ICartModuleApi } from '../interfaces/cart-module.interface';
import { CartService } from '../services/cart.service';
import type { Prisma } from '../../../generated/prisma';

@Injectable()
export class CartModuleFacade implements ICartModuleApi {
  constructor(private readonly cartService: CartService) {}

  async clearCartByCustomerId(customerId: string, tx?: Prisma.TransactionClient): Promise<void> {
    return this.cartService.clearCartByCustomerId(customerId, tx);
  }

  async lockCart(customerId: string, tx?: Prisma.TransactionClient): Promise<void> {
    return this.cartService.lockCart(customerId, tx);
  }

  async unlockCart(customerId: string, tx?: Prisma.TransactionClient): Promise<void> {
    return this.cartService.unlockCart(customerId, tx);
  }

  async getCartWithCartItemsByCustomerId(customerId: string, tx?: Prisma.TransactionClient): Promise<any> {
    return this.cartService.getCartWithCartItemsByCustomerId(customerId, tx);
  }
}
