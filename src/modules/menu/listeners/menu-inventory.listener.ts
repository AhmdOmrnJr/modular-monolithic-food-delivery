import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { MenuItemService } from '../services/menuItem.service';
import { ORDER_EVENTS } from '../../order/constants/order.constants';

@Injectable()
export class MenuInventoryListener {
  private readonly logger = new Logger(MenuInventoryListener.name);

  constructor(private readonly menuItemService: MenuItemService) {}

  @OnEvent(ORDER_EVENTS.CANCELED)
  async handleOrderCanceled(payload: { orderId: string; orderItems: { menuItemId: string; quantity: number }[] }) {
    this.logger.log(`Handling order.canceled inside MenuModule for order ${payload.orderId}`);
    try {
      await this.menuItemService.restoreStockBatch(payload.orderItems);
      this.logger.log(`Successfully restored stock in batch for order ${payload.orderId}`);
    } catch (err: any) {
      this.logger.error(`Failed to restore inventory for order ${payload.orderId}: ${err.message}`);
    }
  }
}
