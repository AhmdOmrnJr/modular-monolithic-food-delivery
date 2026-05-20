import { Injectable, Logger, InternalServerErrorException, NotFoundException, ForbiddenException, BadRequestException, ConflictException, Inject } from "@nestjs/common";
import type { IMenuModuleApi } from "../../menu/interfaces/menu-module.interface";
import { MENU_MODULE_API } from "../../menu/interfaces/menu-module.interface";
import type { IPaymentModuleApi } from "../../payment/interfaces/payment-module.interface";
import { PAYMENT_MODULE_API } from "../../payment/interfaces/payment-module.interface";
import { PrismaService } from "../../../shared/prisma/prisma.service";
import { OrderRepository } from "../repositories/order.repository";
import { OrderHandlerChainBuilder } from "../handlers/OrderHandlerChainBuilder";
import { OrderContext } from "../types/OrderContext";
import type { UpdateOrderStatusDto } from "../dto";
import { NotificationService } from "../../../shared/notification/notification.service";
import { Prisma, OrderStatusKey, PaymentAttemptStatus } from "../../../generated/prisma";
import { OrderTrackingService } from "./orderTracking.service";
import { OrderTrackingStatus } from "../dto/orderTrackingStatus.dto";

@Injectable()
export class OrderService {
    private readonly logger = new Logger(OrderService.name);

    constructor(
        private readonly prisma: PrismaService,
        private readonly orderRepository: OrderRepository,
        private readonly chainBuilder: OrderHandlerChainBuilder,
        private readonly notificationService: NotificationService,
        private readonly orderTrackingService: OrderTrackingService,
        @Inject(MENU_MODULE_API) private readonly menuApi: IMenuModuleApi,
        @Inject(PAYMENT_MODULE_API) private readonly paymentApi: IPaymentModuleApi,
    ) { }

    private async createPendingAttempt(idempotencyKey: string, customerId: string, timestamp: Date): Promise<void> {
        await this.paymentApi.upsertPendingAttempt(idempotencyKey, null, customerId, 'UNKNOWN', timestamp);
    }

    private async handleIdempotencyCheck(
        idempotencyKey: string,
        requestTimestamp: Date
    ): Promise<{ shouldProceed: boolean; existingOrder?: any }> {
        const existingAttempt = await this.paymentApi.findAttempt(idempotencyKey);

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
                await this.paymentApi.finalizeAttempt(
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
        await this.paymentApi.finalizeAttempt(
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

    async cancelOrder(orderId: string, customerId: string) {
        const order = await this.orderRepository.findOrderById(orderId);

        if (!order) throw new NotFoundException("Order not found");
        if (order.customerId !== customerId) throw new ForbiddenException("Not your order");
        if (order.orderStatus === OrderStatusKey.COMPLETED) throw new BadRequestException("Cannot cancel completed order");
        if (order.orderStatus === OrderStatusKey.CANCELED) throw new BadRequestException("Order is already cancelled");

        // Guard: Prevent cancellation if PREPARING or beyond
        const tracking = await this.orderTrackingService.getOrderTrackingStatus(orderId, customerId);
        const trackingList = (tracking.trackingStatus as { orderStatusKey: OrderTrackingStatus }[]) ?? [];
        
        const hasReachedPreparing = trackingList.some(t =>
            t.orderStatusKey === OrderTrackingStatus.PREPARING ||
            t.orderStatusKey === OrderTrackingStatus.OUTFORDELIVERY ||
            t.orderStatusKey === OrderTrackingStatus.DELIVERED
        );
        if (hasReachedPreparing) {
            throw new BadRequestException("Cannot cancel an order that is already being prepared");
        }

        await this.orderRepository.updateOrderStatus({
            orderId,
            newOrderStatus: OrderStatusKey.CANCELED
        });

        const orderItems = order.orderItems.map((item: any) => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
        }));
        await this.paymentApi.voidHold(orderId);
        await this.menuApi.restoreStockBatch(orderItems);

        return { message: "Order cancelled successfully" };
    }

    async cancelOrderByRestaurant(orderId: string, restaurantId: string, reason: string) {
        const order = await this.orderRepository.findOrderById(orderId);

        if (!order) throw new NotFoundException("Order not found");
        if (order.orderStatus === OrderStatusKey.COMPLETED) throw new BadRequestException("Cannot cancel a completed order");
        if (order.orderStatus === OrderStatusKey.CANCELED) throw new BadRequestException("Order is already cancelled");
        if (order.restaurantId !== restaurantId) throw new ForbiddenException("This order does not belong to your restaurant");

        await this.orderRepository.updateOrderStatus({ orderId, newOrderStatus: OrderStatusKey.CANCELED });

        const orderItems = order.orderItems.map((item: any) => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
        }));
        await this.paymentApi.voidHold(orderId);
        await this.menuApi.restoreStockBatch(orderItems);

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
        await this.paymentApi.updateOrderId(
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

        await this.createPendingAttempt(idempotencyKey, customerId, requestTimestamp);

        let resultContext: OrderContext;

        try {
            resultContext = await this.executeOrderTransaction(
                customerId, restaurantId, customerEmail, paymentProvider, paymentMethodId, requestTimestamp
            );

            if (!resultContext.order) {
                throw new InternalServerErrorException("Failed to place order");
            }

        } catch (err: any) {
            await this.paymentApi.finalizeAttempt(
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

            await this.paymentApi.finalizeAttempt(
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
