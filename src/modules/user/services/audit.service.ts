import { Injectable, Logger } from '@nestjs/common';

/**
 * Mock audit service for logging important events.
 * In production, this would write to a database or logging service.
 */
@Injectable()
export class AuditService {
  private readonly logger = new Logger(AuditService.name);

  /**
   * Logs an order creation event with audit information.
   */
  async logOrderCreation(
    orderId: string,
    customerId: string,
    restaurantId: string,
    totalAmount: number,
  ): Promise<void> {
    const timestamp = new Date().toISOString();

    // Mock implementation - in production, this would write to a database
    this.logger.log(`📝 [AuditService] Audit Log Entry:`);
    this.logger.log(`   - Event: ORDER_CREATED`);
    this.logger.log(`   - Order ID: ${orderId}`);
    this.logger.log(`   - Customer ID: ${customerId}`);
    this.logger.log(`   - Restaurant ID: ${restaurantId}`);
    this.logger.log(`   - Total Amount: ${totalAmount}`);
    this.logger.log(`   - Timestamp: ${timestamp}`);
    this.logger.log(`   - Created By: ${customerId}`);

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 50));

    this.logger.log(`✅ [AuditService] Audit log entry created successfully`);
  }
}
