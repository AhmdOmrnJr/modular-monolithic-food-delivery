import { Inject, Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PAYMENT_EVENTS } from '../../payment/constants/payment.constants';
import type { PaymentAuthorizedPayload, PaymentCapturedPayload, PaymentFailedPayload, StalePaymentPayload } from '../../payment/interfaces/payment-event.interface';
import { OrderService } from '../services/order.service';
import { OrderStatusKey } from '../../../generated/prisma';
import { MENU_MODULE_API } from 'src/modules/menu/interfaces/menu-module.interface';
import type { IMenuModuleApi } from 'src/modules/menu/interfaces/menu-module.interface';

@Injectable()
export class PaymentSagaListener {
  private readonly logger = new Logger(PaymentSagaListener.name);

  constructor(
    private readonly orderService: OrderService,
    @Inject(MENU_MODULE_API) private readonly menuApi: IMenuModuleApi,
  ) { }

  // @OnEvent(ORDER_EVENTS.TRACKING_UPDATED)
  // async handleTrackingUpdated(payload: { orderId: string; orderStatusKey: string }) {
  //   this.logger.log(`Syncing order status for ${payload.orderId} → ${payload.orderStatusKey}`);
  //   try {
  //     await this.orderService.updateOrderStatus({
  //       orderId: payload.orderId,
  //       newOrderStatus: payload.orderStatusKey as any,
  //     });
  //   } catch (err: any) {
  //     this.logger.error(`Failed to sync order status for ${payload.orderId}: ${err.message}`);
  //   }
  // }

  @OnEvent(PAYMENT_EVENTS.AUTHORIZED)
  async handlePaymentAuthorized(payload: PaymentAuthorizedPayload) {
    this.logger.log(`Handling payment.authorized for order ${payload.orderId}`);

    try {
      // Card pre-authorized — move order to COMPLETED so the restaurant can start preparing.
      // The actual charge happens later when the restaurant marks the order as PREPARING
      // (orderTracking.service.ts → capturePayment()).
      await this.orderService.updateOrderStatus({
        orderId: payload.orderId,
        newOrderStatus: OrderStatusKey.COMPLETED,
      });

      this.logger.log(`Order ${payload.orderId} marked COMPLETED (payment pre-authorized)`);
    } catch (err: any) {
      this.logger.error(`Failed to process payment.authorized for order ${payload.orderId}: ${err.message}`);
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

      this.logger.log(`Order ${payload.orderId} marked COMPLETED`);
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
      const order = await this.orderService.findOrderById(payload.orderId);
      if (!order) {
        this.logger.warn(`Stale payment received but order ${payload.orderId} not found`);
        return;
      }

      if (
        order.orderStatus === OrderStatusKey.COMPLETED ||
        order.orderStatus === OrderStatusKey.CANCELED
      ) {
        this.logger.log(`Ignoring stale payment for order ${payload.orderId} because status is already ${order.orderStatus}`);
        return;
      }

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
      await this.menuApi.reduceStock(
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
