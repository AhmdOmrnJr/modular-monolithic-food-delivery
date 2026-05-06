import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PAYMENT_EVENTS } from '../../payment/constants/payment.constants';
import { ORDER_EVENTS } from '../constants/order.constants';
import type { PaymentCapturedPayload, PaymentFailedPayload, StalePaymentPayload } from '../../payment/interfaces/payment-event.interface';
import { OrderService } from '../services/order.service';
import { CartService } from '../../cart/services/cart.service';
import { MenuItemService } from '../../menu/services/menuItem.service';
import { OrderStatusKey } from '../../../generated/prisma';

@Injectable()
export class PaymentSagaListener {
  private readonly logger = new Logger(PaymentSagaListener.name);

  constructor(
    private readonly orderService: OrderService,
    private readonly cartService: CartService,
    private readonly menuItemService: MenuItemService,
  ) {}

  @OnEvent(ORDER_EVENTS.TRACKING_UPDATED)
  async handleTrackingUpdated(payload: { orderId: string; orderStatusKey: string }) {
    this.logger.log(`Syncing order status for ${payload.orderId} → ${payload.orderStatusKey}`);
    try {
      await this.orderService.updateOrderStatus({
        orderId: payload.orderId,
        newOrderStatus: payload.orderStatusKey as any,
      });
    } catch (err: any) {
      this.logger.error(`Failed to sync order status for ${payload.orderId}: ${err.message}`);
    }
  }

  @OnEvent(PAYMENT_EVENTS.CAPTURED)
  async handlePaymentCaptured(payload: PaymentCapturedPayload) {
    this.logger.log(`Handling payment.captured for order ${payload.orderId}`);

    try {
      // 1. Mark order as COMPLETED
      await this.orderService.updateOrderStatus({
        orderId: payload.orderId,
        newOrderStatus: OrderStatusKey.COMPLETED,
      });

      // 2. Resolve customerId — may be missing if event was emitted from capturePayment
      //    directly rather than via the Stripe webhook (which always carries metadata).
      let customerId = payload.customerId;
      if (!customerId) {
        const order = await this.orderService.findOrderById(payload.orderId);
        customerId = order?.customerId ?? '';
      }

      // 3. Clear customer's cart
      if (customerId) {
        await this.cartService.clearCartByCustomerId(customerId);
      }

      this.logger.log(`Order ${payload.orderId} marked COMPLETED and cart cleared`);
    } catch (err: any) {
      this.logger.error(`Failed to process payment.captured for order ${payload.orderId}: ${err.message}`);
    }
  }

  @OnEvent(PAYMENT_EVENTS.FAILED)
  async handlePaymentFailed(payload: PaymentFailedPayload) {
    this.logger.log(`Handling payment.failed for order ${payload.orderId}`);

    try {
      // 1. Cancel the order
      await this.orderService.updateOrderStatus({
        orderId: payload.orderId,
        newOrderStatus: OrderStatusKey.CANCELED,
      });

      // 2. Restore inventory — fetch order items from the service and restore stock
      await this.restoreInventoryForOrder(payload.orderId);

      this.logger.log(`Order ${payload.orderId} cancelled and inventory restored due to payment failure`);
    } catch (err: any) {
      this.logger.error(`Failed to process payment.failed for order ${payload.orderId}: ${err.message}`);
    }
  }

  @OnEvent(PAYMENT_EVENTS.STALE)
  async handleStalePayment(payload: StalePaymentPayload) {
    this.logger.log(`Handling payment.stale for order ${payload.orderId}`);

    try {
      // Same logic as failed: cancel order and restore inventory
      await this.orderService.updateOrderStatus({
        orderId: payload.orderId,
        newOrderStatus: OrderStatusKey.CANCELED,
      });

      await this.restoreInventoryForOrder(payload.orderId);

      this.logger.log(`Order ${payload.orderId} cancelled and inventory restored due to stale payment`);
    } catch (err: any) {
      this.logger.error(`Failed to process payment.stale for order ${payload.orderId}: ${err.message}`);
    }
  }

  /**
   * Fetches the order's items and restores their stock.
   * This is the saga compensation step for a failed/stale payment.
   * The listener owns this logic because it has access to both OrderService
   * and MenuItemService — keeping each module's responsibilities clean.
   */
  private async restoreInventoryForOrder(orderId: string): Promise<void> {
    try {
      const order = await this.orderService.findOrderById(orderId);

      if (!order || !order.orderItems?.length) {
        this.logger.warn(`restoreInventory: no order items found for order ${orderId}`);
        return;
      }

      const itemsToRestore = order.orderItems.map((item: any) => ({
        menuItemId: item.menuItemId,
        quantity: item.quantity,
      }));

      // reduceStock with negative quantities restores stock
      await this.menuItemService.reduceStock(
        itemsToRestore.map(i => ({ ...i, quantity: -i.quantity }))
      );

      this.logger.log(`Inventory restored for ${itemsToRestore.length} item(s) on order ${orderId}`);
    } catch (err: any) {
      this.logger.error(`Failed to restore inventory for order ${orderId}: ${err.message}`);
      // Re-throw so the calling handler can log the full saga failure
      throw err;
    }
  }
}
