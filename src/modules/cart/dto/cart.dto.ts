import { CartEventType } from "../../../generated/prisma";

export interface CreateCartItemDTO {
    menuItemId: string;
    quantity: number;
}

export interface CartEventDTO {
    eventType: CartEventType;
    menuItemId?: string;
    quantity?: number;
}

export interface CreateCartEventDTO {
    customerId: string;
    eventType: CartEventType;
    menuItemId?: string;
    itemName?: string;
    quantity?: number;
    price?: number;
}
