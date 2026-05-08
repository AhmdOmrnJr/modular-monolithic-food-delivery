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
        SELECT "menuItemName", "price", "stock_quantity"
        FROM "menu_items"
        WHERE "menu_item_id" = $4
      ),
      existing_cart AS (
        SELECT "cart_id" FROM "carts" WHERE "customer_id" = $2
      ),
      existing_cart_item AS (
        SELECT "quantity"
        FROM "cart_items"
        WHERE "cart_id" = (SELECT "cart_id" FROM existing_cart) 
          AND "menu_item_id" = $4
      ),
      validation AS (
        SELECT 
          m."stock_quantity" as stock_quantity,
          m."menuItemName" as item_name,
          m."price" as price,
          COALESCE(ci."quantity", 0) as current_quantity,
          CASE WHEN m."stock_quantity" >= COALESCE(ci."quantity", 0) + $5::int THEN true ELSE false END as is_stock_sufficient,
          CASE WHEN m."stock_quantity" IS NOT NULL THEN true ELSE false END as item_exists
        FROM (SELECT 1) _
        LEFT JOIN menu_item m ON true
        LEFT JOIN existing_cart_item ci ON true
      ),
      cart_upsert AS (
        INSERT INTO "carts" ("cart_id", "customer_id", "updated_at")
        SELECT $1, $2, NOW()
        FROM validation
        WHERE is_stock_sufficient = true
        ON CONFLICT ("customer_id") DO UPDATE 
        SET "updated_at" = NOW()
        RETURNING "cart_id"
      ),
      cart_item_upsert AS (
        INSERT INTO "cart_items" ("cart_item_id", "cart_id", "menu_item_id", "quantity", "price", "updated_at")
        SELECT $6, cu."cart_id", $4, $5::int, v.price, NOW()
        FROM cart_upsert cu
        CROSS JOIN validation v
        WHERE v.is_stock_sufficient = true
        ON CONFLICT ("cart_id", "menu_item_id") DO UPDATE
        SET "quantity" = "cart_items"."quantity" + EXCLUDED."quantity",
            "price" = EXCLUDED."price",
            "updated_at" = NOW()
        RETURNING "cart_item_id", "cart_id", "menu_item_id", "quantity", "price"
      ),
      event_insert AS (
        INSERT INTO "cart_events" ("id", "customer_id", "event_type", "menu_item_id", "item_name", "quantity", "price", "event_date")
        SELECT $3, $2, 'ADD_TO_CART', $4, v.item_name, $5::int, v.price, NOW()
        FROM cart_item_upsert cu
        CROSS JOIN validation v
      )
      SELECT 
        v.item_exists as "menuItemExists",
        v.is_stock_sufficient as "isStockSufficient",
        ciu."cart_item_id" as "cartItemId",
        ciu."cart_id" as "cartId", 
        ciu."menu_item_id" as "menuItemId", 
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
        INSERT INTO "cart_events" ("id", "customer_id", "event_type", "menu_item_id", "quantity", "event_date")
        VALUES ($1, $2, 'UPDATE_QUANTITY', $3, $4, NOW())
      ),
      update_item AS (
        UPDATE "cart_items" ci
        SET "quantity" = $4, "updated_at" = NOW()
        FROM "carts" c
        WHERE ci."cart_id" = c."cart_id" 
          AND c."customer_id" = $2 
          AND ci."menu_item_id" = $3
        RETURNING ci.*
      )
      SELECT 
        ci."cart_item_id" as "cartItemId",
        ci."cart_id" as "cartId",
        ci."menu_item_id" as "menuItemId",
        ci."quantity",
        ci."price"
      FROM update_item ci;
    `;

    const result = await this.prisma.$queryRawUnsafe<any[]>(query, newEventId, customerId, menuItemId, newQuantity);
    return result[0];
  }

  async removeFromCart(customerId: string, menuItemId: string) {
    const newEventId = uuidv7();

    // This query deletes the item and uses its dynamic price to log the event simultaneously
    const query = `
      WITH delete_item AS (
        DELETE FROM "cart_items" ci
        USING "carts" c
        WHERE ci."cart_id" = c."cart_id" 
          AND c."customer_id" = $2 
          AND ci."menu_item_id" = $3
        RETURNING ci.price
      ),
      event_insert AS (
        INSERT INTO "cart_events" ("id", "customer_id", "event_type", "menu_item_id", "price", "event_date")
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
        INSERT INTO "cart_events" ("id", "customer_id", "event_type", "event_date")
        VALUES ($1, $2, 'CLEAR_CART', NOW())
      ),
      clear_items AS (
        DELETE FROM "cart_items" ci
        USING "carts" c
        WHERE ci."cart_id" = c."cart_id" 
          AND c."customer_id" = $2
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
        INSERT INTO "cart_events" ("id", "customer_id", "event_type", "event_date")
        VALUES ($1, $2, 'LOCK_CART', NOW())
      ),
      lock_cart AS (
        UPDATE "carts"
        SET "is_locked" = true, "updated_at" = NOW()
        WHERE "customer_id" = $2
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
        INSERT INTO "cart_events" ("id", "customer_id", "event_type", "event_date")
        VALUES ($1, $2, 'UNLOCK_CART', NOW())
      ),
      unlock_cart AS (
        UPDATE "carts"
        SET "is_locked" = false, "updated_at" = NOW()
        WHERE "customer_id" = $2
      )
      SELECT 1;
    `;

    await client.$executeRawUnsafe(query, newEventId, customerId);
  }
}