import { Injectable, Logger } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { NotificationService } from "../../../shared/notification/notification.service";

@Injectable()
export class NotifyRestaurantHandler extends OrderHandler {
    private readonly logger = new Logger(NotifyRestaurantHandler.name);

    constructor(private readonly notificationService: NotificationService) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        if (!context.order) {
            this.logger.log(`No order found in context, skipping restaurant notification`);
            return;
        }

        this.logger.log(`Sending notification to restaurant`);

        try {
            // Fire and forget - don't wait for completion
            this.notificationService.notifyRestaurant(
                context.restaurantId,
                context.order.orderId
            ).catch(error => {
                this.logger.error(`Failed to send notification:`, error);
            });

            this.logger.log(`Notification queued`);
        } catch (error) {
            this.logger.error(`Error queuing notification:`, error);
        }
    }
}
