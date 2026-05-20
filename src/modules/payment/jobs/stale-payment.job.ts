import { Injectable, Logger, Inject } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PaymentAttemptService } from '../services/payment-attempt.service';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { PaymentAttemptStatus } from '../../../generated/prisma';
import { STRIPE_CLIENT, PAYMENT_EVENTS } from '../constants/payment.constants';
import { StalePaymentPayload } from '../interfaces/payment-event.interface';

@Injectable()
export class StalePaymentJob {
  private readonly logger = new Logger(StalePaymentJob.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly paymentAttemptService: PaymentAttemptService,
    private readonly eventEmitter: EventEmitter2,
    @Inject(STRIPE_CLIENT) private readonly stripeClient: any,
  ) { }

  @Cron(CronExpression.EVERY_5_MINUTES)
  async handleStalePayments() {
    this.logger.log('Checking for stale PENDING payments...');

    try {
      // Find all PENDING payments older than 30 minutes, including the related order
      const cutoff = new Date(Date.now() - 30 * 60 * 1000);

      const staleAttempts = await this.prisma.paymentAttempt.findMany({
        where: {
          status: PaymentAttemptStatus.PENDING,
          createdAt: { lt: cutoff },
          orderId: { not: null },
        },
      });

      if (staleAttempts.length === 0) {
        return;
      }

      this.logger.log(`Found ${staleAttempts.length} stale payments. Processing...`);

      for (const attempt of staleAttempts) {
        try {
          // Guard: AUTHORIZED = card is pre-authed, restaurant is reviewing.
          // SUCCESS = webhook arrived but order status update is still pending.
          // Neither should be treated as stale — let the restaurant/webhook finalize them.
          if (
            attempt.status === PaymentAttemptStatus.AUTHORIZED ||
            attempt.status === PaymentAttemptStatus.SUCCESS
          ) {
            this.logger.log(
              `Skipping attempt ${attempt.idempotencyKey} with status ${attempt.status} — not stale`
            );
            continue;
          }

          // If there is a transactionId in Stripe, cancel it to release funds
          if (attempt.transactionId && attempt.provider === 'stripe') {
            await this.stripeClient.paymentIntents.cancel(attempt.transactionId).catch((err) => {
              this.logger.warn(`Could not cancel PaymentIntent ${attempt.transactionId}: ${err.message}`);
            });
          }

          // Mark our attempt as FAILED
          await this.paymentAttemptService.updateStatus(
            attempt.idempotencyKey,
            PaymentAttemptStatus.FAILED,
            attempt.transactionId,
            { reason: 'Stale payment — cancelled by cron job' },
          );

          // Emit the cancellation event — this cancels the order and restores stock
          // only for orders that are genuinely still PENDING (user abandoned the flow).
          this.eventEmitter.emit(
            PAYMENT_EVENTS.STALE,
            {
              orderId: attempt.orderId!,
              transactionId: attempt.transactionId || undefined,
              reason: 'Payment timed out',
            } as StalePaymentPayload,
          );
        } catch (err: any) {
          this.logger.error(`Failed to process stale attempt ${attempt.idempotencyKey}: ${err.message}`);
        }
      }
    } catch (err: any) {
      this.logger.error('Stale payment job failed:', err.message);
    }
  }
}
