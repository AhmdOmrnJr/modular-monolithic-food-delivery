import { Injectable, Logger, InternalServerErrorException } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { OrderRepository } from "../repositories/order.repository";
import { OrderStatusKey } from "../../../generated/prisma";

@Injectable()
export class CreateOrderHandler extends OrderHandler {
    private readonly logger = new Logger(CreateOrderHandler.name);

    constructor(private readonly orderRepository: OrderRepository) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        this.logger.log(`Creating order record`);

        if (!context.cartItems) {
            throw new InternalServerErrorException("Cart items not found in context (CreateOrder)");
        }

        const order = await this.orderRepository.createOrder({
            customerId: context.customerId,
            restaurantId: context.restaurantId,
            cartItems: context.cartItems,
            orderStatus: OrderStatusKey.PENDING,
        }, context.tx);

        context.order = order;
        this.logger.log(`Order created with ID: ${order.orderId}`);
    }
}
