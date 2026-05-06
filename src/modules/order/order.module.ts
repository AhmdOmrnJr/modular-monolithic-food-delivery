import { Module } from '@nestjs/common';
import { OrderController } from './controllers/order.controller';
import { OrderService } from './services/order.service';
import { OrderTrackingService } from './services/orderTracking.service';
import { OrderRepository } from './repositories/order.repository';
import { OrderTrackingRepository } from './repositories/order-tracking.repository';
import { OrderHandlerChainBuilder } from './handlers/OrderHandlerChainBuilder';
import { PaymentSagaListener } from './listeners/payment-saga.listener';

// Handlers
import { LockCartHandler } from './handlers/LockCartHandler';
import { ValidateCartHandler } from './handlers/ValidateCartHandler';
import { CheckInventoryHandler } from './handlers/CheckInventoryHandler';
import { CreateOrderHandler } from './handlers/CreateOrderHandler';
import { ReduceInventoryHandler } from './handlers/ReduceInventoryHandler';
import { UnlockCartHandler } from './handlers/UnlockCartHandler';
import { UpdateOrderStatusHandler } from './handlers/UpdateOrderStatusHandler';
import { ClearCartHandler } from './handlers/ClearCartHandler';
import { ProcessPaymentHandler } from './handlers/ProcessPaymentHandler';
import { ParallelOrderHandler } from './handlers/ParallelOrderHandler';
import { NotifyCustomerHandler } from './handlers/NotifyCustomerHandler';
import { NotifyRestaurantHandler } from './handlers/NotifyRestaurantHandler';
import { AuditLogHandler } from './handlers/AuditLogHandler';

// External Modules
import { CartModule } from '../cart/cart.module';
import { MenuModule } from '../menu/menu.module';
import { UserModule } from '../user/user.module';
import { CustomerModule } from '../customer/customer.module';
import { RestaurantModule } from '../restaurant/restaurant.module';

@Module({
  imports: [
    CartModule,
    MenuModule,
    UserModule,
    CustomerModule,
    RestaurantModule,
  ],
  controllers: [OrderController],
  providers: [
    OrderService,
    OrderTrackingService,
    OrderRepository,
    OrderTrackingRepository,
    OrderHandlerChainBuilder,
    PaymentSagaListener,

    // Handlers
    LockCartHandler,
    ValidateCartHandler,
    CheckInventoryHandler,
    CreateOrderHandler,
    ReduceInventoryHandler,
    UnlockCartHandler,
    UpdateOrderStatusHandler,
    ClearCartHandler,
    ProcessPaymentHandler,
    ParallelOrderHandler,
    NotifyCustomerHandler,
    NotifyRestaurantHandler,
    AuditLogHandler,
  ],
  exports: [OrderService],
})
export class OrderModule {}
