import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CartService } from '../services/cart.service';
import { PAYMENT_EVENTS } from '../../payment/constants/payment.constants';
import type { PaymentCapturedPayload } from '../../payment/interfaces/payment-event.interface';

@Injectable()
export class CartPaymentListener {
  private readonly logger = new Logger(CartPaymentListener.name);

  constructor(private readonly cartService: CartService) {}

  @OnEvent(PAYMENT_EVENTS.CAPTURED)
  async handlePaymentCaptured(payload: PaymentCapturedPayload) {
    this.logger.log(`Handling payment.captured in CartModule for order ${payload.orderId}`);
    try {
      const customerId = payload.customerId;
      if (customerId) {
        await this.cartService.clearCartByCustomerId(customerId);
        this.logger.log(`Successfully cleared cart for customer ${customerId}`);
      } else {
        this.logger.warn(`No customerId provided in payment.captured event for order ${payload.orderId}`);
      }
    } catch (err: any) {
      this.logger.error(`Failed to clear cart on payment capture: ${err.message}`);
    }
  }
}
