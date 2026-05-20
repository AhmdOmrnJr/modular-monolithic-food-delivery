import { Injectable, Logger, InternalServerErrorException } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { OrderRepository } from "../repositories/order.repository";
import { OrderStatusKey } from "../../../generated/prisma";

@Injectable()
export class UpdateOrderStatusHandler extends OrderHandler {
    private readonly logger = new Logger(UpdateOrderStatusHandler.name);

    constructor(private readonly orderRepository: OrderRepository) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        if (!context.shouldUpdateOrderStatus) {
            this.logger.log(`Skipping status update (handled asynchronously later)`);
            return;
        }

        this.logger.log(`Updating order status`);

        if (!context.order || !context.paymentResult) {
            throw new InternalServerErrorException("Order or payment result not found in context");
        }

        const newStatus = context.paymentResult.success
            ? OrderStatusKey.COMPLETED
            : OrderStatusKey.CANCELED;

        const updatedOrder = await this.orderRepository.updateOrderStatus({
            orderId: context.order.orderId,
            newOrderStatus: newStatus
        });

        context.finalOrder = updatedOrder;
        this.logger.log(`Order status updated to: ${newStatus}`);
    }
}
