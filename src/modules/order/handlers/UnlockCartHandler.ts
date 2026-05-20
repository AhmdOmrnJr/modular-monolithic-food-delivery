import { Injectable, Logger } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { Inject } from "@nestjs/common";
import type { ICartModuleApi } from "../../cart/interfaces/cart-module.interface";
import { CART_MODULE_API } from "../../cart/interfaces/cart-module.interface";

@Injectable()
export class UnlockCartHandler extends OrderHandler {
    private readonly logger = new Logger(UnlockCartHandler.name);

    constructor(@Inject(CART_MODULE_API) private readonly cartApi: ICartModuleApi) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        if (!context.isCartLocked) {
            this.logger.log(`Cart was not locked, skipping unlock`);
            return;
        }

        this.logger.log(`Unlocking cart`);

        try {
            await this.cartApi.unlockCart(context.customerId, context.tx);
            context.isCartLocked = false;
            this.logger.log(`Cart unlocked successfully`);
        } catch (error) {
            this.logger.error(`Failed to unlock cart:`, error);
            // Don't throw - we want to ensure this always completes
        }
    }
}
