import { Controller, Get, Post, Body, Render } from '@nestjs/common';
import { PaymentService } from '../modules/payment/services/payment.service';
import { ConfigService } from '@nestjs/config';

@Controller('test')
export class TestController {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly configService: ConfigService,
  ) {}

  @Get('checkout')
  @Render('checkout')
  getCheckout() {
    return { 
      stripePublishableKey: this.configService.get('STRIPE_PUBLISHABLE_KEY') || '' 
    };
  }

  @Get('login')
  @Render('login')
  getLogin() {
    return {};
  }

  @Post('reconcile-order')
  async reconcileOrder(@Body('orderId') orderId: string) {
    return await this.paymentService.reconcileOrder(orderId);
  }
}
