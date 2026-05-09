import { Injectable, ConflictException, NotFoundException } from "@nestjs/common";
import { createMenuItemDto, updateMenuItemDto } from "../dto";
import { MenuItemRepository } from "../repositories/menuItem.repository";
import { formatPagination, PaginationDto } from "../../../shared/utils/pagination.utils";

@Injectable()
export class MenuItemService {
    constructor(private readonly menuItemRepository: MenuItemRepository) {}

    async getAllMenuItemsByMenuCategoryId(menuCategoryId: string) {
        return await this.menuItemRepository.getAllMenuItemsByMenuCategoryId(menuCategoryId);
    }

    async getMenuItemById(menuItemId: string) {
        return await this.menuItemRepository.getMenuItemById(menuItemId);
    }

    async createMenuItem(data: createMenuItemDto) {
        return await this.menuItemRepository.createMenuItem(data);
    }

    async updateMenuItem(data: updateMenuItemDto) {
        return await this.menuItemRepository.updateMenuItem(data);
    }

    async deleteMenuItem(menuItemId: string) {
        return await this.menuItemRepository.deleteMenuItem(menuItemId);
    }

    async searchMenuItem(keyword: string, query: PaginationDto) {
        const { menuItems, total } = await this.menuItemRepository.searchMenuItem(keyword, query);
        return {
            data: menuItems,
            meta: formatPagination({
                page: Number(query.page),
                perPage: Number(query.perPage),
                total,
            }),
        };
    }

    async validateStock(items: { menuItemId: string, quantity: number }[], tx?: any) {
        const menuItemIds = items.map((item) => item.menuItemId);
        const menuItems = await this.menuItemRepository.getMenuItemsForStockCheck(menuItemIds, tx);

        const menuItemMap = new Map(menuItems.map((item) => [item.menuItemId, item]));

        for (const item of items) {
            const menuItem = menuItemMap.get(item.menuItemId);

            if (!menuItem) throw new NotFoundException(`Item with ID '${item.menuItemId}' not found`);

            if (item.quantity > menuItem.stockQuantity) {
                throw new ConflictException(
                    `Item '${menuItem.menuItemName}' is out of stock. Required: ${item.quantity}, Available: ${menuItem.stockQuantity}`
                );
            }
        }
    }

    async reduceStock(items: { menuItemId: string, quantity: number }[], tx?: any) {
        const stockUpdates = items.map((item) => {
            return this.menuItemRepository.reduceStock(item.menuItemId, item.quantity, tx);
        });

        await Promise.all(stockUpdates);
    }

    async restoreStockBatch(items: { menuItemId: string, quantity: number }[], tx?: any) {
        await this.menuItemRepository.restoreStockBatch(items, tx);
    }

}
