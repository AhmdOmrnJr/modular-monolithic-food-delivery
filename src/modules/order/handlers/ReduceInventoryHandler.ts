import { Injectable, Logger, InternalServerErrorException } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { MenuItemService } from "../../menu/services/menuItem.service";

@Injectable()
export class ReduceInventoryHandler extends OrderHandler {
    private readonly logger = new Logger(ReduceInventoryHandler.name);

    constructor(private readonly menuItemService: MenuItemService) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        this.logger.log(`Reducing inventory`);

        if (!context.cartItems) {
            throw new InternalServerErrorException("Cart items not found in context (ReduceInventory)");
        }

        await this.menuItemService.reduceStock(context.cartItems, context.tx);

        this.logger.log(`Inventory reduced successfully`);
    }
}
