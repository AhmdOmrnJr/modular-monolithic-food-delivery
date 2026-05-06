import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../../../shared/prisma/prisma.service";
import { createMenuCategoryDto, updateMenuCategoryDto } from "../dto";

@Injectable()
export class MenuCategoryRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findAllMenuCategoriesByMenuId(menuId: string) {
        const menuCategories = await this.prisma.menuCategory.findMany({
            where: {
                menuId: menuId
            },
            select: {
                menuCategoryId: true,
                menuCategoryName: true,
                menuCategoryImageUrl: true,
            }
        });

        if (!menuCategories || menuCategories.length === 0) {
            throw new NotFoundException("No Menu categories Was Found For This Menu");
        }

        return menuCategories;
    }

    async createMenuCategory(data: createMenuCategoryDto) {
        const menuCategory = await this.prisma.menuCategory.create({
            data: {
                menuId: data.menuId,
                menuCategoryName: data.menuCategoryName,
                menuCategoryImageUrl: data.menuCategoryImageUrl,
            },
            select: {
                menuCategoryId: true,
                menuCategoryName: true,
                menuCategoryImageUrl: true,
            }
        });
        
        if (!menuCategory) throw new BadRequestException("Failed To Create Menu category");

        return menuCategory;
    }

    async updateMenuCategory(data: updateMenuCategoryDto) {
        try {
            const menuCategory = await this.prisma.menuCategory.update({
                where: {
                    menuCategoryId: data.menuCategoryId,
                },
                data: {
                    ...(data.menuCategoryName !== undefined && { menuCategoryName: data.menuCategoryName }),
                    ...(data.menuCategoryImageUrl !== undefined && { menuCategoryImageUrl: data.menuCategoryImageUrl }),
                },
                select: {
                    menuCategoryId: true,
                    menuCategoryName: true,
                    menuCategoryImageUrl: true,
                }
            });
            return menuCategory;
        } catch (error) {
            throw new BadRequestException("Failed To Update Menu category");
        }
    }

    async deleteMenuCategory(menuCategoryId: string) {
        try {
            const menuCategory = await this.prisma.menuCategory.delete({
                where: {
                    menuCategoryId: menuCategoryId,
                },
            });
            return menuCategory;
        } catch (error) {
            throw new BadRequestException("Failed To Delete Menu category");
        }
    }
}
