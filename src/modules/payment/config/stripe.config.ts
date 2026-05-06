import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { STRIPE_CLIENT } from '../constants/payment.constants';

export const stripeProvider = {
  provide: STRIPE_CLIENT,
  useFactory: (configService: ConfigService) => {
    const secretKey = configService.getOrThrow<string>('STRIPE_SECRET_KEY');
    return new Stripe(secretKey, {
      apiVersion: '2026-04-22.dahlia', // Latest API version string to avoid TS error, though clover is also valid if you prefer
    });
  },
  inject: [ConfigService],
};
