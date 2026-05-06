import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ORDER_EVENTS } from '../../order/constants/order.constants';
import { PaymentService } from '../services/payment.service';

/**
 * Listens for order lifecycle events that require payment actions.
 * This keeps payment capture logic inside the payment module,
 * rather than leaking payment knowledge into the order tracking module.
 */
@Injectable()
export class OrderTrackingListener {
  private readonly logger = new Logger(OrderTrackingListener.name);

  constructor(private readonly paymentService: PaymentService) {}

  @OnEvent(ORDER_EVENTS.PREPARING)
  async handleOrderPreparing(payload: { orderId: string }) {
    this.logger.log(`Order ${payload.orderId} is PREPARING — capturing payment`);
    try {
      await this.paymentService.capturePayment(payload.orderId);
      this.logger.log(`Payment captured successfully for order ${payload.orderId}`);
    } catch (err: any) {
      this.logger.error(
        `Failed to capture payment for order ${payload.orderId}: ${err.message}`,
        err.stack,
      );
    }
  }
}
