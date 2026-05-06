import { Injectable, Logger } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { CartService } from "../../cart/services/cart.service";

@Injectable()
export class ClearCartHandler extends OrderHandler {
    private readonly logger = new Logger(ClearCartHandler.name);

    constructor(private readonly cartService: CartService) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        if (!context.shouldClearCart) {
            this.logger.log(`Skipping cart clearing (payment failed or async)`);
            return;
        }

        this.logger.log(`Clearing cart`);

        await this.cartService.clearCartByCustomerId(context.customerId);

        this.logger.log(`Cart cleared successfully`);
    }
}
