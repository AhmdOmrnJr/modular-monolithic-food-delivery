import { Injectable, Scope } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { LockCartHandler } from "./LockCartHandler";
import { CreateOrderHandler } from "./CreateOrderHandler";
import { ClearCartHandler } from "./ClearCartHandler";
import { ReduceInventoryHandler } from "./ReduceInventoryHandler";
import { CheckInventoryHandler } from "./CheckInventoryHandler";
import { ValidateCartHandler } from "./ValidateCartHandler";
import { ProcessPaymentHandler } from "./ProcessPaymentHandler";
import { UpdateOrderStatusHandler } from "./UpdateOrderStatusHandler";
import { UnlockCartHandler } from "./UnlockCartHandler";
import { ParallelOrderHandler } from "./ParallelOrderHandler";

@Injectable({ scope: Scope.TRANSIENT })
export class OrderHandlerChainBuilder {
    constructor(
        private readonly lockCart: LockCartHandler,
        private readonly validateCart: ValidateCartHandler,
        private readonly checkInventory: CheckInventoryHandler,
        private readonly createOrder: CreateOrderHandler,
        private readonly reduceInventory: ReduceInventoryHandler,
        private readonly unlockCart: UnlockCartHandler,
        private readonly parallelHandler: ParallelOrderHandler,
        
        private readonly processPayment: ProcessPaymentHandler,
        private readonly updateOrderStatus: UpdateOrderStatusHandler,
        private readonly clearCart: ClearCartHandler
    ) {}

    /**
     * Phase A: DB Transaction Chain
     * Runs inside the Prisma transaction.
     * Handles cart validation, inventory checking, and order creation.
     */
    public buildOrderTransactionChain(): OrderHandler {
        this.lockCart
            .setNext(this.validateCart)
            .setNext(this.checkInventory)
            .setNext(this.createOrder)
            .setNext(this.reduceInventory)
            .setNext(this.unlockCart)
            .setNext(this.parallelHandler);

        return this.lockCart;
    }

    /**
     * Phase B: External API Call & Status Update
     * Runs AFTER the Prisma transaction successfully commits.
     * Processes payment, updates order status, and clears cart.
     */
    public buildPaymentProcessingChain(): OrderHandler {
        this.processPayment
            .setNext(this.updateOrderStatus)
            .setNext(this.clearCart);

        return this.processPayment;
    }
}
