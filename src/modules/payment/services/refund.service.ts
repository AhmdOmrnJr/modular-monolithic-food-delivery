import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { PaymentAttemptService } from './payment-attempt.service';
import { PaymentStrategyFactory } from '../strategies/payment-strategy.factory';
import { RefundRepository } from '../repositories/refund.repository';

@Injectable()
export class RefundService {
  constructor(
    private readonly paymentAttemptService: PaymentAttemptService,
    private readonly strategyFactory: PaymentStrategyFactory,
    private readonly refundRepository: RefundRepository,
  ) {}

  /**
   * Refinements from the original code: 
   * amount is now passed in since we don't have OrderService to look it up.
   */
  async refundOrder(orderId: string, amount: number) {
    const attempt = await this.paymentAttemptService.findByOrderId(orderId);

    if (!attempt) {
      throw new NotFoundException(`No successful payment found for order ${orderId}`);
    }
    if (!attempt.transactionId) {
      throw new InternalServerErrorException('Payment attempt missing transaction ID, cannot refund');
    }

    const strategy = this.strategyFactory.getStrategy(attempt.provider);

    // Call the payment provider
    let result;
    try {
      result = await strategy.refund(attempt.transactionId, amount);
    } catch (error: any) {
      throw new InternalServerErrorException(`Provider refund call failed: ${error.message}`);
    }

    // Persist the refund record
    try {
      await this.refundRepository.create({
        orderId,
        paymentAttemptId: attempt.idempotencyKey,
        refundTransactionId: result.refundId,
        amount,
        status: result.success ? 'COMPLETED' : 'FAILED',
        provider: attempt.provider,
      });
    } catch (error: any) {
      // Log but don't throw — the money has already been refunded to the customer.
      // A reconciliation job should handle this case.
      console.error(`Refund record persistence failed for order ${orderId}: ${error.message}`);
    }

    return result;
  }
}
