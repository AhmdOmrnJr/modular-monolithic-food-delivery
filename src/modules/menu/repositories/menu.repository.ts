import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../../../shared/prisma/prisma.service";
import { createMenuDto, updateMenuDto } from "../dto";

@Injectable()
export class MenuRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getActiveMenuByRestaurantId(restaurantId: string) {
        return await this.prisma.menu.findFirst({
            where: {
                restaurantId: restaurantId,
                isActive: true,
            },
        });
    }
    
    async createMenu(data: createMenuDto) {
        const menu = await this.prisma.menu.create({
            data: data,
        });
        if (!menu) throw new BadRequestException("Menu not created");

        return menu;
    }

    async updateMenu(data: updateMenuDto) {
        try {
            return await this.prisma.menu.update({
                where: {
                    menuId: data.menuId,
                },
                data: {
                    menuDesc: data.menuDesc,
                    isActive: data.isActive,
                }
            });
        } catch (error: any) {
            if (error.code === "P2025") {
                throw new NotFoundException("Menu not found");
            }
            throw new BadRequestException("Menu not found");
        }
    }

    async deleteMenu(menuId: string) {
        const menu = await this.prisma.menu.findUnique({
            where: {
                menuId: menuId,
            },
        });
        if (!menu) throw new NotFoundException("Menu not found");

        return await this.prisma.menu.delete({
            where: {
                menuId: menuId,
            },
        });
    }

    async enableOrDisableMenu(menuId: string) {
        const menu = await this.prisma.menu.findUnique({
            where: {
                menuId: menuId,
            },
        });
        if (!menu) throw new NotFoundException("Menu not found");

        return await this.prisma.menu.update({
            where: {
                menuId: menuId,
            },
            data: {
                isActive: !menu.isActive
            },
        });
    }

    async viewHistoryListOfRestaurantMenus(restaurantId: string) {
        return await this.prisma.menu.findMany({
            where: {
                restaurantId: restaurantId,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }
}
