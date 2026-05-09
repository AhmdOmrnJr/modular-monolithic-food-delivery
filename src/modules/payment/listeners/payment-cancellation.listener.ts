import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PaymentAttemptService } from '../services/payment-attempt.service';
import { PaymentService } from '../services/payment.service';
import { RefundService } from '../services/refund.service';
import { PaymentAttemptStatus } from '../../../generated/prisma';
import { ORDER_EVENTS } from '../../order/constants/order.constants';

@Injectable()
export class PaymentCancellationListener {
  private readonly logger = new Logger(PaymentCancellationListener.name);

  constructor(
    private readonly paymentAttemptService: PaymentAttemptService,
    private readonly paymentService: PaymentService,
    private readonly refundService: RefundService,
  ) {}

  @OnEvent(ORDER_EVENTS.CANCELED)
  async handleOrderCanceled(payload: { orderId: string; totalAmount: number }) {
    this.logger.log(`Handling order.canceled inside PaymentModule for order ${payload.orderId}`);
    try {
      const idempotencyKey = `order_${payload.orderId}`;
      const attempt = await this.paymentAttemptService.findAttempt(idempotencyKey);

      if (!attempt) return;

      if (attempt.status === PaymentAttemptStatus.AUTHORIZED) {
        await this.paymentService.voidHold(payload.orderId);
        this.logger.log(`Successfully voided hold for order ${payload.orderId}`);
      } else if (attempt.status === PaymentAttemptStatus.SUCCESS) {
        await this.refundService.refundOrder(payload.orderId, payload.totalAmount);
        this.logger.log(`Successfully refunded order ${payload.orderId} for amount ${payload.totalAmount}`);
      }
    } catch (err: any) {
      this.logger.error(`Failed to release payment hold/refund for order ${payload.orderId}: ${err.message}`);
    }
  }
}
