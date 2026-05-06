import { Injectable, Logger } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { NotificationService } from "../../../shared/notification/notification.service";

@Injectable()
export class NotifyCustomerHandler extends OrderHandler {
    private readonly logger = new Logger(NotifyCustomerHandler.name);

    constructor(private readonly notificationService: NotificationService) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        if (!context.order) {
            this.logger.log(`No order found in context, skipping customer notification`);
            return;
        }

        this.logger.log(`Sending notification to customer`);

        try {
            // Fire and forget - don't wait for completion
            this.notificationService.notifyCustomer(
                context.customerId,
                context.order.orderId,
                context.order.orderStatus
            ).catch(error => {
                this.logger.error(`Failed to send notification:`, error);
            });

            this.logger.log(`Notification queued`);
        } catch (error) {
            this.logger.error(`Error queuing notification:`, error);
        }
    }
}
