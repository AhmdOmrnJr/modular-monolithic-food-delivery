import { Injectable, Logger } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { Inject } from "@nestjs/common";
import type { ICartModuleApi } from "../../cart/interfaces/cart-module.interface";
import { CART_MODULE_API } from "../../cart/interfaces/cart-module.interface";

@Injectable()
export class ClearCartHandler extends OrderHandler {
    private readonly logger = new Logger(ClearCartHandler.name);

    constructor(@Inject(CART_MODULE_API) private readonly cartApi: ICartModuleApi) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        if (!context.shouldClearCart) {
            this.logger.log(`Skipping cart clearing (payment failed or async)`);
            return;
        }

        this.logger.log(`Clearing cart`);

        await this.cartApi.clearCartByCustomerId(context.customerId);

        this.logger.log(`Cart cleared successfully`);
    }
}
