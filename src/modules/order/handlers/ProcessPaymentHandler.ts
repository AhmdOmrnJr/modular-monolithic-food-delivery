import { Injectable, Logger, InternalServerErrorException } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { Inject } from "@nestjs/common";
import type { IPaymentModuleApi } from "../../payment/interfaces/payment-module.interface";
import { PAYMENT_MODULE_API } from "../../payment/interfaces/payment-module.interface";

@Injectable()
export class ProcessPaymentHandler extends OrderHandler {
    private readonly logger = new Logger(ProcessPaymentHandler.name);

    constructor(@Inject(PAYMENT_MODULE_API) private readonly paymentApi: IPaymentModuleApi) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        this.logger.log(`Creating PaymentIntent`);

        if (!context.order) throw new InternalServerErrorException("Order not found in context (ProcessPayment)");

        const result = await this.paymentApi.processPayment({
            customerId: context.customerId,
            orderId: context.order.orderId,
            amount: context.order.totalAmount,
            customerEmail: context.customerEmail,
            restaurantId: context.restaurantId,
            requestTimestamp: context.requestTimestamp,
            paymentProvider: context.paymentProvider,
            paymentMethodId: context.paymentMethodId,
        });

        // Store transactionId for PaymentAttempt linking in OrderService
        context.paymentResult = {
            success: !result.requiresAction, // if no action required (like COD), it's a sync success
            transactionId: result.transactionId || '',
        };

        // clientSecret returned to the API caller so frontend can complete payment
        if (result.clientSecret !== undefined) {
            context.clientSecret = result.clientSecret;
        }

        if (!result.requiresAction) {
            this.logger.log(`Synchronous payment success (no action req). Enqueueing status update and cart clear.`);
            context.shouldUpdateOrderStatus = true;
            context.shouldClearCart = true;
        } else {
            // Cart is managed by the webhook later.
            context.shouldUpdateOrderStatus = false;
            context.shouldClearCart = false;
            this.logger.log(`Payment processing started: ${result.transactionId}`);
        }
    }
}
