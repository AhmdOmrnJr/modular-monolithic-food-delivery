import { Injectable, Logger } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { Inject } from "@nestjs/common";
import type { ICartModuleApi } from "../../cart/interfaces/cart-module.interface";
import { CART_MODULE_API } from "../../cart/interfaces/cart-module.interface";

@Injectable()
export class LockCartHandler extends OrderHandler {
    private readonly logger = new Logger(LockCartHandler.name);

    constructor(@Inject(CART_MODULE_API) private readonly cartApi: ICartModuleApi) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        this.logger.log(`Locking cart for customer: ${context.customerId}`);

        await this.cartApi.lockCart(context.customerId, context.tx);
        context.isCartLocked = true;

        this.logger.log(`Cart locked successfully`);
    }
}
