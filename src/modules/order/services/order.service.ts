import { Injectable, Logger, InternalServerErrorException, NotFoundException, ForbiddenException, BadRequestException, ConflictException } from "@nestjs/common";
import { PrismaService } from "../../../shared/prisma/prisma.service";
import { OrderRepository } from "../repositories/order.repository";
import { OrderHandlerChainBuilder } from "../handlers/OrderHandlerChainBuilder";
import { OrderContext } from "../types/OrderContext";
import type { UpdateOrderStatusDto } from "../dto";
import { PaymentAttemptService } from "../../payment/services/payment-attempt.service";
import { RefundService } from "../../payment/services/refund.service";
import { MenuItemService } from "../../menu/services/menuItem.service";
import { NotificationService } from "../../../shared/notification/notification.service";
import { OrderTrackingService } from "./orderTracking.service";
import { PaymentService } from "../../payment/services/payment.service";
import { Prisma, OrderStatusKey, PaymentAttemptStatus } from "../../../generated/prisma";

@Injectable()
export class OrderService {
    private readonly logger = new Logger(OrderService.name);

    constructor(
        private readonly prisma: PrismaService,
        private readonly orderRepository: OrderRepository,
        private readonly chainBuilder: OrderHandlerChainBuilder,
        private readonly paymentAttemptService: PaymentAttemptService,
        private readonly refundService: RefundService,
        private readonly menuItemService: MenuItemService,
        private readonly notificationService: NotificationService,
        private readonly paymentService: PaymentService,
    ) {}

    private async createPendingAttempt(idempotencyKey: string, timestamp: Date): Promise<void> {
        await this.paymentAttemptService.upsertPendingAttempt(idempotencyKey, null, 'UNKNOWN', timestamp);
    }

    private async handleIdempotencyCheck(
        idempotencyKey: string,
        requestTimestamp: Date
    ): Promise<{ shouldProceed: boolean; existingOrder?: any }> {
        const existingAttempt = await this.paymentAttemptService.findAttempt(idempotencyKey);

        if (!existingAttempt) {
            return { shouldProceed: true };
        }

        if (existingAttempt.status === PaymentAttemptStatus.SUCCESS) {
            const ageSeconds = (Date.now() - existingAttempt.updatedAt.getTime()) / 1000;
            if (ageSeconds < 60) {
                const order = await this.orderRepository.findOrderById(existingAttempt.orderId!);
                return { shouldProceed: false, existingOrder: order };
            }
        }

        if (existingAttempt.status === PaymentAttemptStatus.PENDING) {
            const ageMinutes = (Date.now() - existingAttempt.createdAt.getTime()) / 60000;
            if (ageMinutes > 5) {
                await this.paymentAttemptService.finalizeAttempt(
                    idempotencyKey,
                    false,
                    '',
                    { error: 'Timeout' },
                    requestTimestamp
                );
                return { shouldProceed: true };
            } else {
                throw new ConflictException("Order placement in progress");
            }
        }

        return { shouldProceed: true };
    }

    private async finalizeSuccessfulAttempt(
        idempotencyKey: string,
        result: any,
        requestTimestamp: Date
    ): Promise<void> {
        await this.paymentAttemptService.finalizeAttempt(
            idempotencyKey,
            true,
            result.paymentResult?.transactionId || '',
            { orderId: result.finalOrder.orderId, ...result.paymentResult },
            requestTimestamp
        );
    }

    async findAllCustomerOrdersByCustomerId(customerId: string) {
        return await this.orderRepository.findAllCustomerOrdersByCustomerId(customerId);
    }

    async findOrderByOrderIdAndCustomerId(orderId: string, customerId: string) {
        return await this.orderRepository.findOrderByOrderIdAndCustomerId(orderId, customerId);
    }

    async findOrderById(orderId: string) {
        return this.orderRepository.findOrderById(orderId);
    }

    async updateOrderStatus(data: UpdateOrderStatusDto, tx?: Prisma.TransactionClient) {
        return await this.orderRepository.updateOrderStatus(data, tx);
    }

    private async releasePaymentHold(orderId: string) {
        const idempotencyKey = `order_${orderId}`;
        const attempt = await this.paymentAttemptService.findAttempt(idempotencyKey);

        if (!attempt) return;

        if (attempt.status === PaymentAttemptStatus.AUTHORIZED) {
            await this.paymentService.voidHold(orderId);
        } else if (attempt.status === PaymentAttemptStatus.SUCCESS) {
            // Need the order amount for the refund call
            const order = await this.orderRepository.findOrderById(orderId);
            await this.refundService.refundOrder(orderId, order.totalAmount);
        }
    }

    async cancelOrder(orderId: string, customerId: string) {
        const order = await this.orderRepository.findOrderById(orderId);

        if (!order) throw new NotFoundException("Order not found");
        if (order.customerId !== customerId) throw new ForbiddenException("Not your order");
        if (order.orderStatus === OrderStatusKey.COMPLETED) throw new BadRequestException("Cannot cancel completed order");
        if (order.orderStatus === OrderStatusKey.CANCELED) throw new BadRequestException("Order is already cancelled");

        // Guard: Prevent cancellation if PREPARING
        // NOTE: OrderTrackingService injected circularly; use repo directly
        const trackings = await this.orderRepository.findOrderById(orderId);
        const trackingList = (trackings as any).orderTracking?.trackingStatus as unknown as { orderStatusKey: string }[] ?? [];
        const hasReachedPreparing = trackingList.some(t =>
            t.orderStatusKey === 'PREPARING' ||
            t.orderStatusKey === 'OUTFORDELIVERY' ||
            t.orderStatusKey === 'DELIVERED'
        );
        if (hasReachedPreparing) throw new BadRequestException("Cannot cancel an order that is already being prepared");

        await this.releasePaymentHold(orderId);

        await this.orderRepository.updateOrderStatus({
            orderId,
            newOrderStatus: OrderStatusKey.CANCELED
        });

        // Restore inventory via MenuItemService (stock restore is wired)
        const orderItems = order.orderItems.map((item: any) => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
        }));
        await this.menuItemService.reduceStock(orderItems.map(i => ({ ...i, quantity: -i.quantity })));

        return { message: "Order cancelled successfully" };
    }

    async cancelOrderByRestaurant(orderId: string, restaurantId: string, reason: string) {
        const order = await this.orderRepository.findOrderById(orderId);

        if (!order) throw new NotFoundException("Order not found");
        if (order.orderStatus === OrderStatusKey.COMPLETED) throw new BadRequestException("Cannot cancel a completed order");
        if (order.orderStatus === OrderStatusKey.CANCELED) throw new BadRequestException("Order is already cancelled");
        if (order.restaurantId !== restaurantId) throw new ForbiddenException("This order does not belong to your restaurant");

        await this.releasePaymentHold(orderId);

        await this.orderRepository.updateOrderStatus({ orderId, newOrderStatus: OrderStatusKey.CANCELED });

        const orderItems = order.orderItems.map((item: any) => ({
            menuItemId: item.menuItemId,
            quantity: -item.quantity, // negative to restore
        }));
        await this.menuItemService.reduceStock(orderItems);

        await this.notificationService.notifyCustomer(
            order.customerId,
            orderId,
            `CANCELED`,
            reason
        );

        return { message: "Order cancelled successfully", reason };
    }

    private async executeOrderTransaction(
        customerId: string,
        restaurantId: string,
        customerEmail: string,
        paymentProvider: string | undefined,
        paymentMethodId: string | undefined,
        requestTimestamp: Date
    ): Promise<OrderContext> {
        const creationChain = this.chainBuilder.buildOrderTransactionChain();

        return await this.prisma.$transaction(async (tx) => {
            const context: OrderContext = {
                customerId,
                restaurantId,
                customerEmail,
                paymentProvider,
                paymentMethodId,
                requestTimestamp,
                tx,
            };

            const chainResult = await creationChain.execute(context);
            return chainResult as OrderContext;
        }, {
            maxWait: 5000,
            timeout: 20000,
        });
    }

    private async processPaymentAndFinalize(
        resultContext: OrderContext,
        idempotencyKey: string,
        requestTimestamp: Date
    ) {
        await this.paymentAttemptService.updateOrderId(
            idempotencyKey,
            resultContext.order!.orderId
        );

        const postCreationChain = this.chainBuilder.buildPaymentProcessingChain();

        const safeContext = { ...resultContext };
        delete safeContext.tx;

        await postCreationChain.execute(safeContext);

        if (safeContext.paymentResult?.success === true) {
            await this.finalizeSuccessfulAttempt(
                idempotencyKey,
                { finalOrder: safeContext.order, paymentResult: safeContext.paymentResult },
                requestTimestamp
            );
        }

        return {
            order: safeContext.order,
            clientSecret: safeContext.clientSecret ?? null,
        };
    }

    async placeOrder(
        customerId: string,
        restaurantId: string,
        customerEmail: string,
        paymentProvider?: string,
        paymentMethodId?: string
    ) {
        const requestTimestamp = new Date();
        const idempotencyKey = `cart_${customerId}_${restaurantId}`;

        const { shouldProceed, existingOrder } = await this.handleIdempotencyCheck(
            idempotencyKey,
            requestTimestamp
        );

        if (!shouldProceed) {
            return existingOrder;
        }

        await this.createPendingAttempt(idempotencyKey, requestTimestamp);

        let resultContext: OrderContext;

        try {
            resultContext = await this.executeOrderTransaction(
                customerId, restaurantId, customerEmail, paymentProvider, paymentMethodId, requestTimestamp
            );

            if (!resultContext.order) {
                throw new InternalServerErrorException("Failed to place order");
            }

        } catch (err: any) {
            await this.paymentAttemptService.finalizeAttempt(
                idempotencyKey,
                false,
                '',
                { error: err.message },
                requestTimestamp
            );

            throw err;
        }

        try {
            return await this.processPaymentAndFinalize(resultContext, idempotencyKey, requestTimestamp);

        } catch (err: any) {
            this.logger.error(`Stripe API failed for order ${resultContext!.order.orderId}:`, err);

            await this.paymentAttemptService.finalizeAttempt(
                idempotencyKey,
                false,
                '',
                { error: err.message, status: 'api_failed' },
                requestTimestamp
            );

            return {
                order: resultContext!.order,
                clientSecret: null,
            };
        }
    }
}
