import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { CartModule } from '../cart/cart.module';

// Config
import { stripeProvider } from './config/stripe.config';

// Controllers
import { StripeWebhookController } from './controllers/stripe-webhook.controller';

// Repositories
import { PaymentAttemptRepository } from './repositories/payment-attempt.repository';
import { PaymentMethodRepository } from './repositories/payment-method.repository';
import { PreferredPaymentSettingsRepository } from './repositories/preferred-payment-settings.repository';
import { RefundRepository } from './repositories/refund.repository';

// Strategies
import { PaymentStrategyFactory } from './strategies/payment-strategy.factory';
import { StripeStrategy } from './strategies/stripe.strategy';
import { PayPalStrategy } from './strategies/paypal.strategy';
import { AmadeusStrategy } from './strategies/amadeus.strategy';
import { CashOnDeliveryStrategy } from './strategies/cash-on-delivery.strategy';

// Services
import { PaymentAttemptService } from './services/payment-attempt.service';
import { PaymentMethodService } from './services/payment-method.service';
import { PaymentService } from './services/payment.service';
import { PreferredPaymentSettingsService } from './services/preferred-payment-settings.service';
import { RefundService } from './services/refund.service';

// Jobs
import { StalePaymentJob } from './jobs/stale-payment.job';

// Listeners

import { PaymentModuleFacade } from './facades/payment-module.facade';
import { PAYMENT_MODULE_API } from './interfaces/payment-module.interface';

@Module({
  imports: [CartModule],
  controllers: [StripeWebhookController],
  providers: [
    stripeProvider,

    PaymentAttemptRepository,
    PaymentMethodRepository,
    PreferredPaymentSettingsRepository,
    RefundRepository,

    StripeStrategy,
    PayPalStrategy,
    AmadeusStrategy,
    CashOnDeliveryStrategy,
    PaymentStrategyFactory,

    PaymentAttemptService,
    PaymentMethodService,
    PaymentService,
    PreferredPaymentSettingsService,
    RefundService,

    StalePaymentJob,
    {
      provide: PAYMENT_MODULE_API,
      useClass: PaymentModuleFacade,
    },
  ],
  exports: [
    PaymentService,
    PaymentMethodService,
    PreferredPaymentSettingsService,
    RefundService,
    PAYMENT_MODULE_API,
  ],
})
export class PaymentModule {}
