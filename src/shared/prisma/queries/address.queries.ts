import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '../../../generated/prisma';
import { uuidv7 } from "uuidv7";

// Minimal interface for Address to avoid cross-module dependency issues early on
export interface Address {
  addressId: string;
  street: string;
  city: string;
  area: string;
  zipCode?: string | null;
  block?: string | null;
  apartmentNumber?: string | null;
  floor?: string | null;
  latitude: number;
  longitude: number;
  isPrimary?: boolean;
  createdAt: Date;
  updatedAt: Date;
  customerId?: string | null;
  restaurantId?: string | null;
}

@Injectable()
export class AddressQueries {
  constructor(private readonly prisma: PrismaService) {}

  async add(
    modelName: 'customer' | 'restaurant',
    parentId: string,
    data: Omit<
      Address,
      'addressId' | 'createdAt' | 'updatedAt' | 'customerId' | 'restaurantId' | 'isPrimary'
    > & { isPrimary?: boolean },
    tx?: Prisma.TransactionClient
  ): Promise<Address> {
    const client = tx || this.prisma;
    const tableName = modelName === 'customer' ? 'customers' : 'restaurants';
    const idColumn = modelName === 'customer' ? 'customer_id' : 'restaurant_id';
    const addressId = uuidv7();

    const storedAddress = {
      addressId,
      street: data.street,
      city: data.city,
      area: data.area,
      zipCode: data.zipCode,
      block: data.block,
      apartmentNumber: data.apartmentNumber,
      floor: data.floor,
      latitude: data.latitude,
      longitude: data.longitude,
      isPrimary: data.isPrimary || false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const addressJson = JSON.stringify(storedAddress);

    const query = `
      UPDATE "${tableName}"
      SET addresses = COALESCE(addresses, '[]'::jsonb) || $1::jsonb
      WHERE "${idColumn}" = $2
    `;

    await client.$executeRawUnsafe(query, addressJson, parentId);

    return {
      ...storedAddress,
      ...(modelName === 'customer' ? { customerId: parentId } : { restaurantId: parentId }),
    } as Address;
  }

  async update(
    modelName: 'customer' | 'restaurant',
    parentId: string,
    addressId: string,
    data: Partial<Address>,
    tx?: Prisma.TransactionClient
  ): Promise<Address> {
    const client = tx || this.prisma;
    const tableName = modelName === 'customer' ? 'customers' : 'restaurants';
    const idColumn = modelName === 'customer' ? 'customer_id' : 'restaurant_id';

    const { customerId, restaurantId, ...cleanData } = data;
    const updateJson = JSON.stringify(cleanData);

    const query = `
      UPDATE "${tableName}"
      SET addresses = (
        SELECT jsonb_agg(
            CASE 
                WHEN elem->>'addressId' = $1 
                THEN elem || $2::jsonb
                ELSE elem 
            END
        )
        FROM jsonb_array_elements(addresses) AS elem
      )
      WHERE "${idColumn}" = $3
      AND addresses @> ('[{"addressId": "' || $1 || '"}]')::jsonb
      RETURNING addresses
    `;

    const result = await client.$queryRawUnsafe<Array<{ addresses: any }>>(
      query,
      addressId,
      updateJson,
      parentId
    );

    if (!result || result.length === 0) throw new Error('Address not found or update failed');

    const updatedAddresses = result[0]!.addresses as any[];
    const updatedAddress = updatedAddresses.find((a) => a.addressId === addressId);

    if (!updatedAddress) throw new Error('Address not found in updated list');

    return {
      ...updatedAddress,
      customerId: modelName === 'customer' ? parentId : null,
      restaurantId: modelName === 'restaurant' ? parentId : null,
    } as Address;
  }

  async remove(modelName: 'customer' | 'restaurant', parentId: string, addressId: string, tx?: Prisma.TransactionClient): Promise<void> {
    const client = tx || this.prisma;
    const tableName = modelName === 'customer' ? 'customers' : 'restaurants';
    const idColumn = modelName === 'customer' ? 'customer_id' : 'restaurant_id';

    const query = `
      UPDATE "${tableName}"
      SET addresses = (
        SELECT jsonb_agg(elem)
        FROM jsonb_array_elements(addresses) AS elem
        WHERE elem->>'addressId' != $1
      )
      WHERE "${idColumn}" = $2
      AND addresses @> ('[{"addressId": "' || $1 || '"}]')::jsonb
    `;
    await client.$executeRawUnsafe(query, addressId, parentId);
  }

  async list(modelName: 'customer' | 'restaurant', parentId: string, tx?: Prisma.TransactionClient): Promise<Address[]> {
    const client = tx || this.prisma;
    const tableName = modelName === 'customer' ? 'customers' : 'restaurants';
    const idColumn = modelName === 'customer' ? 'customer_id' : 'restaurant_id';

    const query = `SELECT addresses FROM "${tableName}" WHERE "${idColumn}" = $1`;
    const result = await client.$queryRawUnsafe<Array<{ addresses: any }>>(
      query,
      parentId
    );

    if (!result || result.length === 0 || !result[0] || !result[0].addresses) return [];

    const rawAddresses = result[0].addresses as any[];

    return rawAddresses.map((addr) => ({
      ...addr,
      customerId: modelName === 'customer' ? parentId : null,
      restaurantId: modelName === 'restaurant' ? parentId : null,
    })) as Address[];
  }

  async findById(modelName: 'customer' | 'restaurant', parentId: string, addressId: string, tx?: Prisma.TransactionClient): Promise<Address | null> {
    const all = await this.list(modelName, parentId, tx);
    return all.find((a) => a.addressId === addressId) || null;
  }

  async unsetPrimary(modelName: 'customer' | 'restaurant', parentId: string, excludeAddressId?: string, tx?: Prisma.TransactionClient): Promise<void> {
    const client = tx || this.prisma;
    const tableName = modelName === 'customer' ? 'customers' : 'restaurants';
    const idColumn = modelName === 'customer' ? 'customer_id' : 'restaurant_id';

    let excludeCondition = 'FALSE';
    if (excludeAddressId) {
      excludeCondition = `(elem->>'addressId' = '${excludeAddressId}')`;
    }

    const query = `
      UPDATE "${tableName}"
      SET addresses = (
          SELECT jsonb_agg(
          CASE 
              WHEN (NOT ${excludeCondition}) AND (elem->>'isPrimary')::boolean = true
              THEN jsonb_set(elem, '{isPrimary}', 'false')
              ELSE elem
          END
          )
          FROM jsonb_array_elements(addresses) AS elem
      )
      WHERE "${idColumn}" = $1
     `;

    await client.$executeRawUnsafe(query, parentId);
  }
}
