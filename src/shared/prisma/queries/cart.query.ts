import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { Prisma } from '../../../generated/prisma';
import { uuidv7 } from "uuidv7";

@Injectable()
export class CartQueries {
  constructor(private readonly prisma: PrismaService) {}

  async addToCart(
    customerId: string,
    menuItemId: string,
    itemName: string,
    quantityToAdd: number,
    price: number,
    tx?: Prisma.TransactionClient
  ) {
    const client = tx || this.prisma;
    
    // We pre-generate IDs in code just in case Prisma maps them as @default(uuid())
    const newCartId = uuidv7(); 
    const newEventId = uuidv7();
    const newCartItemId = uuidv7();

    // 1 query to rule them all: Upsert Cart -> Insert Event -> Upsert Item
    const query = `
      WITH cart_upsert AS (
        INSERT INTO "Cart" ("cartId", "customerId", "updatedAt")
        VALUES ($1, $2, NOW())
        ON CONFLICT ("customerId") DO UPDATE 
        SET "updatedAt" = NOW()
        RETURNING "cartId"
      ),
      event_insert AS (
        INSERT INTO "CartEvent" ("id", "customerId", "eventType", "menuItemId", "itemName", "quantity", "price", "eventDate")
        VALUES ($3, $2, 'ADD_TO_CART', $4, $5, $6, $7, NOW())
      ),
      cart_item_upsert AS (
        INSERT INTO "CartItem" ("cartItemId", "cartId", "menuItemId", "quantity", "price")
        SELECT $8, cu."cartId", $4, $6, $7
        FROM cart_upsert cu
        ON CONFLICT ("cartId", "menuItemId") DO UPDATE
        SET "quantity" = "CartItem"."quantity" + EXCLUDED."quantity",
            "price" = EXCLUDED."price"
        RETURNING "cartId", "menuItemId", "quantity", "price"
      )
      SELECT * FROM cart_item_upsert;
    `;

    const result = await client.$queryRawUnsafe<any[]>(
      query,
      newCartId,      // $1
      customerId,     // $2
      newEventId,     // $3
      menuItemId,     // $4
      itemName,       // $5
      quantityToAdd,  // $6
      price,          // $7
      newCartItemId   // $8
    );

    return result[0];
  }

  async updateQuantity(customerId: string, menuItemId: string, newQuantity: number) {
    const newEventId = uuidv7();

    const query = `
      WITH event_insert AS (
        INSERT INTO "CartEvent" ("id", "customerId", "eventType", "menuItemId", "quantity", "eventDate")
        VALUES ($1, $2, 'UPDATE_QUANTITY', $3, $4, NOW())
      ),
      update_item AS (
        UPDATE "CartItem" ci
        SET "quantity" = $4
        FROM "Cart" c
        WHERE ci."cartId" = c."cartId" 
          AND c."customerId" = $2 
          AND ci."menuItemId" = $3
        RETURNING ci.*
      )
      SELECT * FROM update_item;
    `;

    const result = await this.prisma.$queryRawUnsafe<any[]>(query, newEventId, customerId, menuItemId, newQuantity);
    return result[0];
  }

  async removeFromCart(customerId: string, menuItemId: string) {
    const newEventId = uuidv7();

    // This query deletes the item and uses its dynamic price to log the event simultaneously
    const query = `
      WITH delete_item AS (
        DELETE FROM "CartItem" ci
        USING "Cart" c
        WHERE ci."cartId" = c."cartId" 
          AND c."customerId" = $2 
          AND ci."menuItemId" = $3
        RETURNING ci.price
      ),
      event_insert AS (
        INSERT INTO "CartEvent" ("id", "customerId", "eventType", "menuItemId", "price", "eventDate")
        SELECT $1, $2, 'REMOVE_FROM_CART', $3, price, NOW()
        FROM delete_item
      )
      SELECT * FROM delete_item;
    `;

    const result = await this.prisma.$queryRawUnsafe<any[]>(query, newEventId, customerId, menuItemId);
    return result[0];
  }

  async clearCart(customerId: string) {
    const newEventId = uuidv7();

    const query = `
      WITH event_insert AS (
        INSERT INTO "CartEvent" ("id", "customerId", "eventType", "eventDate")
        VALUES ($1, $2, 'CLEAR_CART', NOW())
      ),
      clear_items AS (
        DELETE FROM "CartItem" ci
        USING "Cart" c
        WHERE ci."cartId" = c."cartId" 
          AND c."customerId" = $2
      )
      SELECT 1;
    `;

    await this.prisma.$queryRawUnsafe(query, newEventId, customerId);
  }
}