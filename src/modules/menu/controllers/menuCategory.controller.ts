import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from "@nestjs/common";
import { MenuCategoryService } from "../services/menuCategory.service";
import type { createMenuCategoryDto, updateMenuCategoryDto } from "../dto";
import { AuthGuard } from "../../../shared/guards/auth.guard";
import { RolesGuard } from "../../../shared/guards/roles.guard";
import { Roles } from "../../../shared/decorators/roles.decorator";

@Controller('menu-category')
export class MenuCategoryController {
    constructor(private readonly menuCategoryService: MenuCategoryService) {}

    @Get('menu/:menuId')
    async findAllMenuCategoriesByMenuId(@Param('menuId') menuId: string) {
        const menuCategories = await this.menuCategoryService.findAllMenuCategoriesByMenuId(menuId);
        return { success: true, data: menuCategories };
    }

    @Post()
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async createMenuCategory(@Body() data: createMenuCategoryDto) {
        const menuCategory = await this.menuCategoryService.createMenuCategory(data);
        return { success: true, message: "Menu category created", data: menuCategory };
    }

    @Put()
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async updateMenuCategory(@Body() data: updateMenuCategoryDto) {
        const menuCategory = await this.menuCategoryService.updateMenuCategory(data);
        return { success: true, message: "Menu category updated", data: menuCategory };
    }

    @Delete()
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async deleteMenuCategory(@Body('menuCategoryId') menuCategoryId: string) {
        const menuCategory = await this.menuCategoryService.deleteMenuCategory(menuCategoryId);
        return { success: true, message: "Menu category deleted", data: menuCategory };
    }
}
