import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '../../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import * as pg from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private pool: pg.Pool;

  constructor(private readonly configService: ConfigService) {
    // Create connection pool using credentials from env
    const pool = new pg.Pool({
      connectionString: configService.getOrThrow<string>('DATABASE_URL'),
      max: 50, // Match the Food-Delivery express app setting
      connectionTimeoutMillis: 20000,
      idleTimeoutMillis: 30000,
    });
    
    // Initialize Prisma PG adapter
    const adapter = new PrismaPg(pool);
    
    // Pass adapter to Prisma client
    super({
      adapter,
      log: ['query', 'error'],
    });
    
    this.pool = pool;
  }

  async onModuleInit() {
    await this.$connect();
    console.log('✅ Prisma connected to PostgreSQL');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    await this.pool.end();
    console.log('🔌 Prisma disconnected from PostgreSQL');
  }
}
