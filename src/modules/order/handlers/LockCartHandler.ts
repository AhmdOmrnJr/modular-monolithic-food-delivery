import { Injectable, Logger } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { CartService } from "../../cart/services/cart.service";

@Injectable()
export class LockCartHandler extends OrderHandler {
    private readonly logger = new Logger(LockCartHandler.name);

    constructor(private readonly cartService: CartService) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        this.logger.log(`Locking cart for customer: ${context.customerId}`);

        await this.cartService.lockCart(context.customerId, context.tx);
        context.isCartLocked = true;

        this.logger.log(`Cart locked successfully`);
    }
}
