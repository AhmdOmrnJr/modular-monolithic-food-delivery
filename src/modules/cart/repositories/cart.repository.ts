import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../shared/prisma/prisma.service";
import { CreateCartItemDTO } from "../dto";
import { Prisma } from "../../../generated/prisma";

@Injectable()
export class CartRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findCartByCustomerId(customerId: string) {
    const cart = await this.prisma.cart.findUnique({ where: { customerId } });
    if (!cart) throw new NotFoundException("No Cart Yet; Add Some Items");
    return cart;
  }

  async findCartIdByCustomerId(customerId: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { customerId },
      select: { cartId: true }
    });
    if (!cart) throw new NotFoundException("No Cart Yet; Add Some Items");
    return cart.cartId;
  }

  async updateCartItemQuantityByCartIdAndMenuItemId(
    cartId: string,
    menuItemId: string,
    quantity: number,
    tx?: Prisma.TransactionClient
  ) {
    const client = tx || this.prisma;
    return await client.cartItem.update({
      where: {
        cartId_menuItemId: {
          cartId,
          menuItemId
        }
      },
      data: { quantity }
    });
  }

  async removeCartItemByCartIdAndMenuItemId(
    cartId: string,
    menuItemId: string,
    tx?: Prisma.TransactionClient
  ) {
    const client = tx || this.prisma;
    return await client.cartItem.delete({
      where: {
        cartId_menuItemId: {
          cartId,
          menuItemId
        }
      }
    });
  }

  async upsertCart(customerId: string, tx?: Prisma.TransactionClient) {
    const client = tx || this.prisma;
    return await client.cart.upsert({
      where: { customerId },
      update: {},
      create: { customerId },
      include: {},
    });
  }

  async getCartWithCartItemsByCustomerId(customerId: string, tx?: Prisma.TransactionClient) {
    const client = tx || this.prisma;
    return await client.cart.upsert({
      where: { customerId },
      update: {},
      create: { customerId },
      select: {
        cartItems: {
          select: {
            menuItemId: true,
            quantity: true,
            price: true,
          },
        },
        cartId: true,
      }
    });
  }

  async findCartItemByCartIdAndMenuItemId(cartId: string, menuItemId: string) {
    const cartItem = await this.prisma.cartItem.findFirst({ where: { cartId, menuItemId } });
    if (!cartItem) throw new NotFoundException("Cart Item not found");
    return cartItem;
  }

  async createCartItem(
    cartItem: CreateCartItemDTO,
    cartId: string,
    itemDetails: { name: string; price: number },
    tx?: Prisma.TransactionClient
  ) {
    const client = tx || this.prisma;
    return await client.cartItem.upsert({
      where: {
        cartId_menuItemId: {
          cartId,
          menuItemId: cartItem.menuItemId,
        },
      },
      update: {
        quantity: cartItem.quantity,
        price: itemDetails.price,
      },
      create: {
        cartId,
        quantity: cartItem.quantity,
        menuItemId: cartItem.menuItemId,
        price: itemDetails.price,
      },
    });
  }

  async clearCart(cartId: string, tx?: Prisma.TransactionClient) {
    const client = tx || this.prisma;
    return await client.cartItem.deleteMany({ where: { cartId } });
  }

  async lockCart(customerId: string, tx?: Prisma.TransactionClient) {
    const client = tx || this.prisma;
    return await client.cart.update({
      where: { customerId },
      data: { isLocked: true },
    });
  }

  async unlockCart(customerId: string, tx?: Prisma.TransactionClient) {
    const client = tx || this.prisma;
    return await client.cart.update({
      where: { customerId },
      data: { isLocked: false },
    });
  }
}
