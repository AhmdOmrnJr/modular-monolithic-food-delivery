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
    quantityToAdd: number,
    tx?: Prisma.TransactionClient
  ) {
    const client = tx || this.prisma;
    
    // We pre-generate IDs in code just in case Prisma maps them as @default(uuid())
    const newCartId = uuidv7(); 
    const newEventId = uuidv7();
    const newCartItemId = uuidv7();

    // 1 query to rule them all: Validate -> Upsert Cart -> Insert Event -> Upsert Item
    const query = `
      WITH menu_item AS (
        SELECT "menuItemName", "price", "stockQuantity"
        FROM "MenuItem"
        WHERE "menuItemId" = $4
      ),
      existing_cart AS (
        SELECT "cartId" FROM "Cart" WHERE "customerId" = $2
      ),
      existing_cart_item AS (
        SELECT "quantity"
        FROM "CartItem"
        WHERE "cartId" = (SELECT "cartId" FROM existing_cart) 
          AND "menuItemId" = $4
      ),
      validation AS (
        SELECT 
          m."stockQuantity" as stock_quantity,
          m."menuItemName" as item_name,
          m."price" as price,
          COALESCE(ci."quantity", 0) as current_quantity,
          CASE WHEN m."stockQuantity" >= COALESCE(ci."quantity", 0) + $5::int THEN true ELSE false END as is_stock_sufficient,
          CASE WHEN m."stockQuantity" IS NOT NULL THEN true ELSE false END as item_exists
        FROM (SELECT 1) _
        LEFT JOIN menu_item m ON true
        LEFT JOIN existing_cart_item ci ON true
      ),
      cart_upsert AS (
        INSERT INTO "Cart" ("cartId", "customerId", "updatedAt")
        SELECT $1, $2, NOW()
        FROM validation
        WHERE is_stock_sufficient = true
        ON CONFLICT ("customerId") DO UPDATE 
        SET "updatedAt" = NOW()
        RETURNING "cartId"
      ),
      cart_item_upsert AS (
        INSERT INTO "CartItem" ("cartItemId", "cartId", "menuItemId", "quantity", "price")
        SELECT $6, cu."cartId", $4, $5::int, v.price
        FROM cart_upsert cu
        CROSS JOIN validation v
        WHERE v.is_stock_sufficient = true
        ON CONFLICT ("cartId", "menuItemId") DO UPDATE
        SET "quantity" = "CartItem"."quantity" + EXCLUDED."quantity",
            "price" = EXCLUDED."price"
        RETURNING "cartItemId", "cartId", "menuItemId", "quantity", "price"
      ),
      event_insert AS (
        INSERT INTO "CartEvent" ("id", "customerId", "eventType", "menuItemId", "itemName", "quantity", "price", "eventDate")
        SELECT $3, $2, 'ADD_TO_CART', $4, v.item_name, $5::int, v.price, NOW()
        FROM cart_item_upsert cu
        CROSS JOIN validation v
      )
      SELECT 
        v.item_exists as "menuItemExists",
        v.is_stock_sufficient as "isStockSufficient",
        ciu."cartItemId",
        ciu."cartId", 
        ciu."menuItemId", 
        ciu."quantity", 
        ciu."price"
      FROM validation v
      LEFT JOIN cart_item_upsert ciu ON true;
    `;

    const result = await client.$queryRawUnsafe<any[]>(
      query,
      newCartId,      // $1
      customerId,     // $2
      newEventId,     // $3
      menuItemId,     // $4
      quantityToAdd,  // $5
      newCartItemId   // $6
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

  async clearCart(customerId: string, tx?: Prisma.TransactionClient) {
    const client = tx || this.prisma;
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

    // By passing 'client', this CTE runs inside the Order transaction if 'tx' is provided!
    await client.$executeRawUnsafe(query, newEventId, customerId);
  }

  async lockCart(customerId: string, tx?: Prisma.TransactionClient) {
    const client = tx || this.prisma;
    const newEventId = uuidv7();

    const query = `
      WITH event_insert AS (
        INSERT INTO "CartEvent" ("id", "customerId", "eventType", "eventDate")
        VALUES ($1, $2, 'LOCK_CART', NOW())
      ),
      lock_cart AS (
        UPDATE "Cart"
        SET "isLocked" = true, "updatedAt" = NOW()
        WHERE "customerId" = $2
      )
      SELECT 1;
    `;

    await client.$executeRawUnsafe(query, newEventId, customerId);
  }

  async unlockCart(customerId: string, tx?: Prisma.TransactionClient) {
    const client = tx || this.prisma;
    const newEventId = uuidv7();

    const query = `
      WITH event_insert AS (
        INSERT INTO "CartEvent" ("id", "customerId", "eventType", "eventDate")
        VALUES ($1, $2, 'UNLOCK_CART', NOW())
      ),
      unlock_cart AS (
        UPDATE "Cart"
        SET "isLocked" = false, "updatedAt" = NOW()
        WHERE "customerId" = $2
      )
      SELECT 1;
    `;

    await client.$executeRawUnsafe(query, newEventId, customerId);
  }
}