import { Injectable } from "@nestjs/common";
import { createMenuDto, updateMenuDto } from "../dto";
import { MenuRepository } from "../repositories/menu.repository";

@Injectable()
export class MenuService {
    constructor(private readonly menuRepository: MenuRepository) {}

    async getActiveMenuByRestaurantId(restaurantId: string) {
        const menu = await this.menuRepository.getActiveMenuByRestaurantId(restaurantId);
        return menu;
    }
    
    async createMenu(data: createMenuDto) {
        const menu = await this.menuRepository.createMenu(data);
        return menu;
    }

    async updateMenu(data: updateMenuDto) {
        const menu = await this.menuRepository.updateMenu(data);
        return menu;
    }

    async deleteMenu(menuId: string) {
        const menu = await this.menuRepository.deleteMenu(menuId);
        return menu;
    }

    async enableOrDisableMenu(menuId: string) {
        const menu = await this.menuRepository.enableOrDisableMenu(menuId);
        return menu;
    }

    async viewHistoryListOfRestaurantMenus(restaurantId: string) {
        const menus = await this.menuRepository.viewHistoryListOfRestaurantMenus(restaurantId);
        return menus;
    }
}
