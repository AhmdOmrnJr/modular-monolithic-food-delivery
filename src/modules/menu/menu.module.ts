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
    ],
    exports: [
        MenuService,
        MenuCategoryService,
        MenuItemService,
    ]
})
export class MenuModule {}
