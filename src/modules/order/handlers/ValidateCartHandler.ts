import { Injectable, Logger, BadRequestException } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { CartService } from "../../cart/services/cart.service";

@Injectable()
export class ValidateCartHandler extends OrderHandler {
    private readonly logger = new Logger(ValidateCartHandler.name);

    constructor(private readonly cartService: CartService) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        this.logger.log(`Fetching cart items for customer: ${context.customerId}`);

        const cart = await this.cartService.getCartWithCartItemsByCustomerId(context.customerId, context.tx);

        if (!cart) throw new BadRequestException("Cart is empty. Cannot place an order.");

        const cartItems = cart.cartItems || [];

        if (!cartItems || cartItems.length === 0) throw new BadRequestException("Cart is empty. Cannot place an order.");

        context.cartItems = cartItems;
        this.logger.log(`Cart validated with ${cartItems.length} items`);
    }
}
