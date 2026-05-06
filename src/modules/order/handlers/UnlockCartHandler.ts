import { Injectable, Logger } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { CartService } from "../../cart/services/cart.service";

@Injectable()
export class UnlockCartHandler extends OrderHandler {
    private readonly logger = new Logger(UnlockCartHandler.name);

    constructor(private readonly cartService: CartService) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        if (!context.isCartLocked) {
            this.logger.log(`Cart was not locked, skipping unlock`);
            return;
        }

        this.logger.log(`Unlocking cart`);

        try {
            await this.cartService.unlockCart(context.customerId, context.tx);
            context.isCartLocked = false;
            this.logger.log(`Cart unlocked successfully`);
        } catch (error) {
            this.logger.error(`Failed to unlock cart:`, error);
            // Don't throw - we want to ensure this always completes
        }
    }
}
