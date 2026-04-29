import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { RoleKey } from '../../../generated/prisma';

@Injectable()
export class RoleQueries {
  constructor(private readonly prisma: PrismaService) {}

  async add(userId: string, role: RoleKey, tx?: any): Promise<void> {
    const client = tx || this.prisma;
    const roleJson = JSON.stringify([role]);

    const query = `
      UPDATE "users"
      SET roles = CASE 
          WHEN roles @> $1::jsonb THEN roles 
          ELSE COALESCE(roles, '[]'::jsonb) || $1::jsonb 
      END
      WHERE "user_id" = $2
    `;

    await client.$executeRawUnsafe(query, roleJson, userId);
  }

  async remove(userId: string, role: RoleKey, tx?: any): Promise<void> {
    const client = tx || this.prisma;
    // Postgres operator '-' removes element from JSONB array
    const query = `
      UPDATE "users"
      SET roles = roles - $1
      WHERE "user_id" = $2
    `;
    // Note: '-' with text expects the string value to remove
    await client.$executeRawUnsafe(query, role, userId);
  }

  async list(userId: string, tx?: any): Promise<RoleKey[]> {
    const client = tx || this.prisma;
    const query = `SELECT roles FROM "users" WHERE "user_id" = $1`;
    const result = (await client.$queryRawUnsafe(
      query,
      userId
    )) as Array<{ roles: any }>;

    if (!result || result.length === 0 || !result[0] || !result[0].roles) return [];
    return result[0].roles as RoleKey[];
  }

  async has(userId: string, role: RoleKey, tx?: any): Promise<boolean> {
    const client = tx || this.prisma;
    // Check if roles contains the specific role
    const roleJson = JSON.stringify([role]);
    const query = `
       SELECT 1 as exists 
       FROM "users" 
       WHERE "user_id" = $1 AND roles @> $2::jsonb
     `;
    const result = (await client.$queryRawUnsafe(
      query,
      userId,
      roleJson
    )) as any[];
    return result.length > 0;
  }
}
