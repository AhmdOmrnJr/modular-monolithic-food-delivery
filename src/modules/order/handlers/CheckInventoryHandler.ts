import { Injectable, Logger, InternalServerErrorException } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { MenuItemService } from "../../menu/services/menuItem.service";

@Injectable()
export class CheckInventoryHandler extends OrderHandler {
    private readonly logger = new Logger(CheckInventoryHandler.name);

    constructor(private readonly menuItemService: MenuItemService) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        this.logger.log(`Checking inventory availability`);

        if (!context.cartItems) {
            throw new InternalServerErrorException("Cart items not found in context (CheckInventory)");
        }

        await this.menuItemService.validateStock(context.cartItems, context.tx);

        this.logger.log(`Inventory check passed`);
    }
}
