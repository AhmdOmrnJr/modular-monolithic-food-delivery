import { Injectable } from "@nestjs/common";
import { createMenuCategoryDto, updateMenuCategoryDto } from "../dto";
import { MenuCategoryRepository } from "../repositories/menuCategory.repository";

@Injectable()
export class MenuCategoryService {
    constructor(private readonly menuCategoryRepository: MenuCategoryRepository) {}

    async findAllMenuCategoriesByMenuId(menuId: string) {
        return await this.menuCategoryRepository.findAllMenuCategoriesByMenuId(menuId);
    }

    async createMenuCategory(data: createMenuCategoryDto) {
        return await this.menuCategoryRepository.createMenuCategory(data);
    }

    async updateMenuCategory(data: updateMenuCategoryDto) {
        return await this.menuCategoryRepository.updateMenuCategory(data);
    }

    async deleteMenuCategory(menuCategoryId: string) {
        return await this.menuCategoryRepository.deleteMenuCategory(menuCategoryId);
    }
}
