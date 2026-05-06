import { Injectable, NotFoundException, BadRequestException, ConflictException } from "@nestjs/common";
import { PrismaService } from "../../../shared/prisma/prisma.service";
import { createMenuItemDto, updateMenuItemDto } from "../dto";
import { PaginationDto, handleQueryPagination } from "../../../shared/utils/pagination.utils";
import { Prisma } from "../../../generated/prisma";

@Injectable()
export class MenuItemRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getAllMenuItemsByMenuCategoryId(menuCategoryId: string) {
        const menuItem = await this.prisma.menuItem.findMany({
            where: {
                menuCategoryId: menuCategoryId,
            },
            select: {
                menuItemId: true,
                menuItemName: true,
                menuItemDesc: true,
                menuItemImageUrl: true,
                price: true,
            },
        });

        if (!menuItem || menuItem.length === 0) throw new NotFoundException("No menu items found");

        return menuItem;
    }

    async getMenuItemById(menuItemId: string) {
        const menuItem = await this.prisma.menuItem.findUnique({
            where: {
                menuItemId: menuItemId,
            },
            select: {
                menuItemId: true,
                menuItemName: true,
                menuItemDesc: true,
                menuItemImageUrl: true,
                price: true,
                stockQuantity: true,
            },
        });
        if (!menuItem) throw new NotFoundException("No menu item found");

        return menuItem;
    }

    async createMenuItem(data: createMenuItemDto) {
        const menuItem = await this.prisma.menuItem.create({
            data: {
                ...data,
            },
        });
        if (!menuItem) throw new BadRequestException("Failed To Create Menu item");

        return menuItem;
    }

    async updateMenuItem(data: updateMenuItemDto) {
        try {
            const menuItem = await this.prisma.menuItem.update({
                where: {
                    menuItemId: data.menuItemId,
                },
                data: {
                    ...(data.menuItemName !== undefined && { menuItemName: data.menuItemName }),
                    ...(data.menuItemDesc !== undefined && { menuItemDesc: data.menuItemDesc }),
                    ...(data.price !== undefined && { price: data.price }),
                    ...(data.stockQuantity !== undefined && { stockQuantity: data.stockQuantity }),
                },
            });
            return menuItem;
        } catch (error) {
            throw new BadRequestException("Failed To Update Menu item");
        }
    }

    async deleteMenuItem(menuItemId: string) {
        try {
            const menuItem = await this.prisma.menuItem.delete({
                where: {
                    menuItemId: menuItemId,
                },
            });
            return menuItem;
        } catch (error) {
            throw new BadRequestException("Failed To Delete Menu item");
        }
    }

    async searchMenuItem(keyword: string, query: PaginationDto) {
        const menuItems = await this.prisma.menuItem.findMany({
            where: {
                menuItemName: {
                    contains: keyword,
                    mode: "insensitive",
                },
            },
            select: {
                menuItemName: true,
                menuItemImageUrl: true,
                price: true,
            },
            ...handleQueryPagination(query),
        });

        const total = await this.prisma.menuItem.count({
            where: {
                menuItemName: {
                    contains: keyword,
                    mode: "insensitive",
                },
            },
        });

        return { menuItems, total };
    }

    async getMenuItemsForStockCheck(menuItemIds: string[], tx?: Prisma.TransactionClient) {
        const client = tx || this.prisma;
        const menuItems = await client.menuItem.findMany({
            where: {
                menuItemId: { in: menuItemIds },
            },
            select: {
                menuItemId: true,
                menuItemName: true,
                stockQuantity: true,
            },
        });
        return menuItems;
    }

    async reduceStock(menuItemId: string, quantity: number, tx?: Prisma.TransactionClient) {
        const client = tx || this.prisma;
        return await client.menuItem.update({
            where: { menuItemId },
            data: {
                stockQuantity: {
                    decrement: quantity,
                },
            },
        });
    }

    async restoreStockBatch(items: { menuItemId: string; quantity: number }[], tx?: Prisma.TransactionClient) {
        if (items.length === 0) return;

        const client = tx || this.prisma;
        const params: (string | number)[] = [];
        const valuesStrings: string[] = [];

        items.forEach((item, index) => {
            const idParamIndex = index * 2 + 1;
            const qtyParamIndex = index * 2 + 2;

            params.push(item.menuItemId);
            params.push(item.quantity);

            valuesStrings.push(`($${idParamIndex}, $${qtyParamIndex}::int)`);
        });

        const valuesCondition = valuesStrings.join(", ");

        const query = `
          UPDATE "menu_items" as m
          SET "stock_quantity" = m."stock_quantity" + v.quantity
          FROM (VALUES ${valuesCondition}) as v(id, quantity)
          WHERE m."menu_item_id" = v.id
        `;

        return await client.$executeRawUnsafe(query, ...params);
    }
}
