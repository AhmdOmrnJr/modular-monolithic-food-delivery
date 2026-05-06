import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  /**
   * Sends a notification to the restaurant about a new order.
   */
  async notifyRestaurant(restaurantId: string, orderId: string): Promise<void> {
    // Mock implementation - in production, this would send actual notifications
    this.logger.log(`📧 Sending notification to restaurant ${restaurantId} about order ${orderId}`);

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 100));

    this.logger.log(`✅ Restaurant notification sent successfully`);
  }

  /**
   * Sends a notification to the customer about their order.
   */
  async notifyCustomer(customerId: string, orderId: string, orderStatus: string, reason?: string): Promise<void> {
    // Mock implementation - in production, this would send actual notifications
    this.logger.log(`📧 Sending notification to customer ${customerId} about order ${orderId} (Status: ${orderStatus})`);
    
    if (reason) {
      this.logger.log(`📧 Reason: ${reason}`);
    }

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 100));

    this.logger.log(`✅ Customer notification sent successfully`);
  }
}
