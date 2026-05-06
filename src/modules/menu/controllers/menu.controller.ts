import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, BadRequestException } from "@nestjs/common";
import { MenuService } from "../services/menu.service";
import type { createMenuDto, updateMenuDto } from "../dto";
import { AuthGuard } from "../../../shared/guards/auth.guard";
import { RolesGuard } from "../../../shared/guards/roles.guard";
import { Roles } from "../../../shared/decorators/roles.decorator";

@Controller('menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) {}

    @Get('active/:restaurantId')
    async getActiveMenuByRestaurantId(@Param('restaurantId') restaurantId: string) {
        const menu = await this.menuService.getActiveMenuByRestaurantId(restaurantId);
        if (!menu) throw new BadRequestException("Active menu not found");
        return { success: true, data: menu };
    }
    
    @Post()
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async createMenu(@Body() data: createMenuDto) {
        const menu = await this.menuService.createMenu(data);
        return { success: true, data: menu };
    }

    @Put()
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async updateMenu(@Body() data: updateMenuDto) {
        const menu = await this.menuService.updateMenu(data);
        return { success: true, data: menu };
    }

    @Delete()
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async deleteMenu(@Body('menuId') menuId: string) {
        const menu = await this.menuService.deleteMenu(menuId);
        return { success: true, message: "Menu deleted successfully", data: menu };
    }

    @Put('enable-disable')
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async enableOrDisableMenu(@Body('menuId') menuId: string) {
        const menu = await this.menuService.enableOrDisableMenu(menuId);
        return { success: true, message: "Menu status updated", data: menu };
    }

    @Get('history/:restaurantId')
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async viewHistoryListOfRestaurantMenus(@Param('restaurantId') restaurantId: string) {
        const menus = await this.menuService.viewHistoryListOfRestaurantMenus(restaurantId);
        return { success: true, data: menus };
    }
}
