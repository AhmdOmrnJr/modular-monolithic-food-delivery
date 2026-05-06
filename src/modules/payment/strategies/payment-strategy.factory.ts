import { Injectable, BadRequestException } from '@nestjs/common';
import { IPaymentStrategy } from '../interfaces/payment-strategy.interface';
import { StripeStrategy } from './stripe.strategy';
import { PayPalStrategy } from './paypal.strategy';
import { AmadeusStrategy } from './amadeus.strategy';
import { CashOnDeliveryStrategy } from './cash-on-delivery.strategy';

@Injectable()
export class PaymentStrategyFactory {
  constructor(
    private readonly stripeStrategy: StripeStrategy,
    private readonly payPalStrategy: PayPalStrategy,
    private readonly amadeusStrategy: AmadeusStrategy,
    private readonly cashOnDeliveryStrategy: CashOnDeliveryStrategy,
  ) {}

  getStrategy(provider: string): IPaymentStrategy {
    switch (provider.toUpperCase()) {
      case 'STRIPE':
        return this.stripeStrategy;
      case 'PAYPAL':
        return this.payPalStrategy;
      case 'AMADEUS':
        return this.amadeusStrategy;
      case 'CASH_ON_DELIVERY':
        return this.cashOnDeliveryStrategy;
      default:
        throw new BadRequestException(`Unsupported payment provider: ${provider}`);
    }
  }
}
