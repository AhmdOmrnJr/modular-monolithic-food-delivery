import { Injectable, Logger, InternalServerErrorException } from "@nestjs/common";
import { OrderHandler } from "./base/OrderHandler";
import { OrderContext } from "../types/OrderContext";
import { Inject } from "@nestjs/common";
import type { IMenuModuleApi } from "../../menu/interfaces/menu-module.interface";
import { MENU_MODULE_API } from "../../menu/interfaces/menu-module.interface";

@Injectable()
export class CheckInventoryHandler extends OrderHandler {
    private readonly logger = new Logger(CheckInventoryHandler.name);

    constructor(@Inject(MENU_MODULE_API) private readonly menuApi: IMenuModuleApi) {
        super();
    }

    protected async handle(context: OrderContext): Promise<void> {
        this.logger.log(`Checking inventory availability`);

        if (!context.cartItems) {
            throw new InternalServerErrorException("Cart items not found in context (CheckInventory)");
        }

        await this.menuApi.validateStock(context.cartItems, context.tx);

        this.logger.log(`Inventory check passed`);
    }
}
