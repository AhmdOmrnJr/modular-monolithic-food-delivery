import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { RoleQueries } from './queries/role.queries';
import { AddressQueries } from './queries/address.queries';
import { OrderTrackingQueries } from './queries/order-tracking.queries';

@Global()
@Module({
  providers: [PrismaService, RoleQueries, AddressQueries, OrderTrackingQueries],
  exports: [PrismaService, RoleQueries, AddressQueries, OrderTrackingQueries],
})
export class SharedPrismaModule {}
