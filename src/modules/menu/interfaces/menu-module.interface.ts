export const MENU_MODULE_API = 'MENU_MODULE_API';

export interface IMenuModuleApi {
  restoreStockBatch(items: { menuItemId: string; quantity: number }[], tx?: any): Promise<void>;
  validateStock(items: { menuItemId: string; quantity: number }[], tx?: any): Promise<void>;
  reduceStock(items: { menuItemId: string; quantity: number }[], tx?: any): Promise<void>;
}
