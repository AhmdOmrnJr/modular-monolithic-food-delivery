import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from "@nestjs/common";
import { MenuItemService } from "../services/menuItem.service";
import type { createMenuItemDto, updateMenuItemDto } from "../dto";
import type { PaginationDto } from "../../../shared/utils/pagination.utils";
import { AuthGuard } from "../../../shared/guards/auth.guard";
import { RolesGuard } from "../../../shared/guards/roles.guard";
import { Roles } from "../../../shared/decorators/roles.decorator";

@Controller('menu-item')
export class MenuItemController {
    constructor(private readonly menuItemService: MenuItemService) {}

    @Get('category/:menuCategoryId')
    async getAllMenuItemByMenuCategoryId(@Param('menuCategoryId') menuCategoryId: string) {
        const menuItems = await this.menuItemService.getAllMenuItemsByMenuCategoryId(menuCategoryId);
        return { success: true, data: menuItems };
    }

    @Get(':menuItemId')
    async getMenuItemById(@Param('menuItemId') menuItemId: string) {
        const menuItem = await this.menuItemService.getMenuItemById(menuItemId);
        return { success: true, data: menuItem };
    }

    @Post()
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async createMenuItem(@Body() data: createMenuItemDto) {
        const menuItem = await this.menuItemService.createMenuItem(data);
        return { success: true, message: "Menu item created", data: menuItem };
    }

    @Put()
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async updateMenuItem(@Body() data: updateMenuItemDto) {
        const menuItem = await this.menuItemService.updateMenuItem(data);
        return { success: true, message: "Menu item updated", data: menuItem };
    }

    @Delete()
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async deleteMenuItem(@Body('menuItemId') menuItemId: string) {
        const menuItem = await this.menuItemService.deleteMenuItem(menuItemId);
        return { success: true, message: "Menu item deleted", data: menuItem };
    }

    @Get('search/:keyword')
    async searchMenuItem(@Param('keyword') keyword: string, @Query() query: PaginationDto) {
        const result = await this.menuItemService.searchMenuItem(keyword, query);
        return { success: true, ...result };
    }
}
