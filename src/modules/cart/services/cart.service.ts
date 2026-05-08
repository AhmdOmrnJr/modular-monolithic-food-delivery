import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { CreateCartItemDTO, CartEventDTO } from "../dto";
import { CartRepository } from "../repositories/cart.repository";
import { CartEventService } from "./cartEvent.service";
import { PrismaService } from "../../../shared/prisma/prisma.service";
import { MenuItemService } from "../../menu/services/menuItem.service";
import { Prisma, CartEventType } from "../../../generated/prisma";
import { CartQueries } from "src/shared/prisma/queries/cart.query";

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly cartEventService: CartEventService,
    private readonly menuItemService: MenuItemService,
    private readonly prisma: PrismaService,
    private readonly cartQueries: CartQueries,
  ) {}

  async handleCartEvent(event: CartEventDTO, customerId: string) {
    if (!event.eventType) throw new BadRequestException("Event Type is required");

    switch (event.eventType) {
      case CartEventType.ADD_TO_CART:
        return await this.addToCart({ menuItemId: event.menuItemId!, quantity: event.quantity! }, customerId);

      case CartEventType.UPDATE_QUANTITY:
        return await this.updateQuantityByMenuItemId(event.menuItemId!, event.quantity!, customerId);

      case CartEventType.REMOVE_FROM_CART:
        return await this.removeCartItemByMenuItemId(event.menuItemId!, customerId);

      case CartEventType.CLEAR_CART:
        return await this.clearCart(customerId);

      default:
        throw new BadRequestException("Invalid Event Type");
    }
  }

  async addToCart(cartItem: CreateCartItemDTO, customerId: string) {
    // Perform Validation, Cart Upsert, Event Log, and Item Upsert in a SINGLE atomic database query (1 DB roundtrip)
    const result = await this.cartQueries.addToCart(
      customerId,
      cartItem.menuItemId,
      cartItem.quantity // We pass the delta, the CTE adds it and checks stock
    );

    if (!result.menuItemExists) {
      throw new NotFoundException("Menu Item not found");
    }
    if (!result.isStockSufficient) {
      throw new NotFoundException("Not enough stock");
    }

    return {
      cart: {
        cartId: result.cartId,
        cartItems: [
          {
            cartItemId: result.cartItemId,
            cartId: result.cartId,
            menuItemId: result.menuItemId,
            quantity: result.quantity,
            price: result.price,
          }
        ]
      }
    };
  }

  async getCartWithCartItemsByCustomerId(customerId: string, tx?: Prisma.TransactionClient) {
    const client = tx || this.prisma;
    return await this.cartRepository.getCartWithCartItemsByCustomerId(customerId, client);
  }

  private async updateQuantityByMenuItemId(menuItemId: string, quantity: number, customerId: string) {
    return await this.cartQueries.updateQuantity(customerId, menuItemId, quantity);
  }

  private async removeCartItemByMenuItemId(menuItemId: string, customerId: string) {
    return await this.cartQueries.removeFromCart(customerId, menuItemId);
  }

  async clearCart(customerId: string, tx?: Prisma.TransactionClient) {
    // Keep the validation if you want to throw 404s for missing carts
    const cart = await this.cartRepository.findCartByCustomerId(customerId);
    if (!cart) throw new NotFoundException("Cart not found!");

    // Pass 'tx' to the query. If 'tx' is undefined, the query uses 'this.prisma'
    await this.cartQueries.clearCart(customerId, tx);
  }

  async lockCart(customerId: string, tx?: Prisma.TransactionClient) {
    // Single atomic call, participates in external transaction if tx is passed
    await this.cartQueries.lockCart(customerId, tx);
  }

  async unlockCart(customerId: string, tx?: Prisma.TransactionClient) {
    // Single atomic call, participates in external transaction if tx is passed
    await this.cartQueries.unlockCart(customerId, tx);
  }

  async clearCartByCustomerId(customerId: string, tx?: Prisma.TransactionClient) {
    await this.clearCart(customerId, tx);
  }
}
