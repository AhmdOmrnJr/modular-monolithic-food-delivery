import { Injectable, Logger } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { AuditService } from "../../../shared/audit/audit.service";

@Injectable()
export class AuditLogHandler extends OrderHandler {
    private readonly logger = new Logger(AuditLogHandler.name);

    constructor(private readonly auditService: AuditService) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        if (!context.order) {
            this.logger.log(`No order found in context, skipping audit log`);
            return;
        }

        this.logger.log(`Creating audit log entry`);

        try {
            await this.auditService.logOrderCreation(
                context.order.orderId,
                context.customerId,
                context.restaurantId,
                context.order.totalAmount
            );

            this.logger.log(`Audit log created successfully`);
        } catch (error) {
            this.logger.error(`Failed to create audit log:`, error);
        }
    }
}
