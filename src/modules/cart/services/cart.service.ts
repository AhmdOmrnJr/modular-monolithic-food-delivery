import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { CreateCartItemDTO, CartEventDTO } from "../dto";
import { CartRepository } from "../repositories/cart.repository";
import { CartEventService } from "./cartEvent.service";
import { PrismaService } from "../../../shared/prisma/prisma.service";
import { MenuItemService } from "../../menu/services/menuItem.service";
import { Prisma, CartEventType } from "../../../generated/prisma";

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly cartEventService: CartEventService,
    private readonly menuItemService: MenuItemService,
    private readonly prisma: PrismaService
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
    const menuItem = await this.menuItemService.getMenuItemById(cartItem.menuItemId);

    if (!menuItem) throw new NotFoundException("Menu Item not found");

    let cart: any = await this.cartRepository.getCartWithCartItemsByCustomerId(customerId);

    const existingItem = cart.cartItems?.find((item: any) => item.menuItemId === cartItem.menuItemId);
    const currentQuantity = existingItem ? existingItem.quantity : 0;
    const newTotalQuantity = currentQuantity + cartItem.quantity;

    if (menuItem.stockQuantity < newTotalQuantity) throw new NotFoundException("Not enough stock");

    const newCartItem = await this.prisma.$transaction(async (tx) => {
      await this.cartEventService.createEvent({
        customerId,
        eventType: CartEventType.ADD_TO_CART,
        menuItemId: cartItem.menuItemId,
        itemName: menuItem.menuItemName,
        quantity: cartItem.quantity,
        price: menuItem.price,
      }, tx);

      return await this.cartRepository.createCartItem(
        { ...cartItem, quantity: newTotalQuantity },
        cart.cartId,
        { name: menuItem.menuItemName, price: menuItem.price },
        tx
      );
    });

    cart.cartItems = [newCartItem];

    return { cart };
  }

  async getCartWithCartItemsByCustomerId(customerId: string, tx?: Prisma.TransactionClient) {
    const client = tx || this.prisma;
    return await this.cartRepository.getCartWithCartItemsByCustomerId(customerId, client);
  }

  private async updateQuantityByMenuItemId(menuItemId: string, quantity: number, customerId: string) {
    const cartId = await this.cartRepository.findCartIdByCustomerId(customerId);

    return await this.prisma.$transaction(async (tx) => {
      await this.cartEventService.createEvent({
        customerId,
        eventType: CartEventType.UPDATE_QUANTITY,
        menuItemId,
        quantity,
      }, tx);

      return await this.cartRepository.updateCartItemQuantityByCartIdAndMenuItemId(
        cartId,
        menuItemId,
        quantity,
        tx
      );
    });
  }

  private async removeCartItemByMenuItemId(menuItemId: string, customerId: string) {
    const cartId = await this.cartRepository.findCartIdByCustomerId(customerId);

    return await this.prisma.$transaction(async (tx) => {
      // 1. Remove Item (returns deleted item with price)
      const deletedItem = await this.cartRepository.removeCartItemByCartIdAndMenuItemId(
        cartId,
        menuItemId,
        tx
      );

      // 2. Log Event
      await this.cartEventService.createEvent({
        customerId,
        eventType: CartEventType.REMOVE_FROM_CART,
        menuItemId,
        price: deletedItem.price
      }, tx);

      return deletedItem;
    });
  }

  async clearCart(customerId: string, tx?: Prisma.TransactionClient) {
    const cart = await this.cartRepository.findCartByCustomerId(customerId);
    if (!cart) throw new NotFoundException("Cart not found!");

    if (tx) {
        await this.cartEventService.createEvent({
            customerId,
            eventType: CartEventType.CLEAR_CART,
        }, tx);
        await this.cartRepository.clearCart(cart.cartId, tx);
    } else {
        await this.prisma.$transaction(async (activeTx) => {
            await this.cartEventService.createEvent({
                customerId,
                eventType: CartEventType.CLEAR_CART,
            }, activeTx);
            await this.cartRepository.clearCart(cart.cartId, activeTx);
        });
    }
  }

  async lockCart(customerId: string, tx?: Prisma.TransactionClient) {
    if (tx) {
        await this.cartEventService.createEvent({
            customerId,
            eventType: CartEventType.LOCK_CART,
        }, tx);
        await this.cartRepository.lockCart(customerId, tx);
    } else {
        await this.prisma.$transaction(async (activeTx) => {
            await this.cartEventService.createEvent({
                customerId,
                eventType: CartEventType.LOCK_CART,
            }, activeTx);
            await this.cartRepository.lockCart(customerId, activeTx);
        });
    }
  }

  async unlockCart(customerId: string, tx?: Prisma.TransactionClient) {
    if (tx) {
        await this.cartEventService.createEvent({
            customerId,
            eventType: CartEventType.UNLOCK_CART,
        }, tx);
        await this.cartRepository.unlockCart(customerId, tx);
    } else {
        await this.prisma.$transaction(async (activeTx) => {
            await this.cartEventService.createEvent({
                customerId,
                eventType: CartEventType.UNLOCK_CART,
            }, activeTx);
            await this.cartRepository.unlockCart(customerId, activeTx);
        });
    }
  }

  async clearCartByCustomerId(customerId: string, tx?: Prisma.TransactionClient) {
    await this.clearCart(customerId, tx);
  }
}
