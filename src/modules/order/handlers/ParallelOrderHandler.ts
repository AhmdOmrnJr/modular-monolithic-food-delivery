import { Injectable, Logger } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { NotifyRestaurantHandler } from "./NotifyRestaurantHandler";
import { NotifyCustomerHandler } from "./NotifyCustomerHandler";
import { AuditLogHandler } from "./AuditLogHandler";

@Injectable()
export class ParallelOrderHandler extends OrderHandler {
    private readonly logger = new Logger(ParallelOrderHandler.name);
    private backgroundHandlers: OrderHandler[];

    constructor(
        notifyRestaurant: NotifyRestaurantHandler,
        notifyCustomer: NotifyCustomerHandler,
        auditLog: AuditLogHandler
    ) {
        super();
        this.backgroundHandlers = [notifyRestaurant, notifyCustomer, auditLog];
    }

    protected async handle(context: OrderContext): Promise<void> {
        // 1. Fire background handlers (Fire and Forget)
        if (this.backgroundHandlers.length > 0) {
            // CRITICAL: Remove 'tx' from context for background handlers!
            // They must use a fresh connection because the main transaction will close immediately after this handler returns.
            const { tx, ...safeContext } = context;

            // Small delay to ensure the main transaction commits before background tasks try to read the Order
            Promise.all(this.backgroundHandlers.map(h => h.execute(safeContext as OrderContext)))
                .catch(err => {
                    this.logger.error("Background handler error:", err);
                });
        }
    }
}
