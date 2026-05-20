import { Module } from "@nestjs/common";
import { MenuController } from "./controllers/menu.controller";
import { MenuService } from "./services/menu.service";
import { MenuRepository } from "./repositories/menu.repository";
import { MenuCategoryController } from "./controllers/menuCategory.controller";
import { MenuCategoryService } from "./services/menuCategory.service";
import { MenuCategoryRepository } from "./repositories/menuCategory.repository";
import { MenuItemController } from "./controllers/menuItem.controller";
import { MenuItemService } from "./services/menuItem.service";
import { MenuItemRepository } from "./repositories/menuItem.repository";

import { MenuModuleFacade } from "./facades/menu-module.facade";
import { MENU_MODULE_API } from "./interfaces/menu-module.interface";
@Module({
    controllers: [
        MenuController,
        MenuCategoryController,
        MenuItemController,
    ],
    providers: [
        MenuService,
        MenuRepository,
        MenuCategoryService,
        MenuCategoryRepository,
        MenuItemService,
        MenuItemRepository,
        {
            provide: MENU_MODULE_API,
            useClass: MenuModuleFacade,
        },
    ],
    exports: [
        MenuService,
        MenuCategoryService,
        MenuItemService,
        MENU_MODULE_API,
    ]
})
export class MenuModule {}
