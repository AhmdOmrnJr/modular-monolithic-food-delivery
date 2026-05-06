import { OrderStatusKey } from "../../../generated/prisma";

export type CartItemSummary = {
  menuItemId: string;
  quantity: number;
  price: number;
};

export type FindOrdersByIdDto = {
  orderId: string;
}

export type CreateOrderDto = {
  customerId: string;
  restaurantId: string;
  cartItems: CartItemSummary[];
  orderStatus: OrderStatusKey;
};

export type UpdateOrderStatusDto = {
  orderId: string;
  newOrderStatus: OrderStatusKey;
};
