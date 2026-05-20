import { Injectable } from '@nestjs/common';
import { IMenuModuleApi } from '../interfaces/menu-module.interface';
import { MenuItemService } from '../services/menuItem.service';

@Injectable()
export class MenuModuleFacade implements IMenuModuleApi {
  constructor(private readonly menuItemService: MenuItemService) {}

  async restoreStockBatch(items: { menuItemId: string; quantity: number }[], tx?: any): Promise<void> {
    return this.menuItemService.restoreStockBatch(items, tx);
  }

  async validateStock(items: { menuItemId: string; quantity: number }[], tx?: any): Promise<void> {
    return this.menuItemService.validateStock(items, tx);
  }

  async reduceStock(items: { menuItemId: string; quantity: number }[], tx?: any): Promise<void> {
    return this.menuItemService.reduceStock(items, tx);
  }
}
