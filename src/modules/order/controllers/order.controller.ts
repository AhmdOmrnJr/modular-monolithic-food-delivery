import { Controller, Get, Post, Body, Param, UseGuards, Patch } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { OrderTrackingService } from '../services/orderTracking.service';
import { AuthGuard } from '../../../shared/guards/auth.guard';
import { RolesGuard } from '../../../shared/guards/roles.guard';
import { Roles } from '../../../shared/decorators/roles.decorator';
import { CurrentUser } from '../../../shared/decorators/current-user.decorator';
import type { UpdateOrderStatusDto, UpdateOrderTrackingStatusDto } from '../dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Orders')
@ApiBearerAuth()
@Controller('orders')
@UseGuards(AuthGuard, RolesGuard)
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly orderTrackingService: OrderTrackingService,
  ) {}

  @Get()
  @Roles('CUSTOMER')
  @ApiOperation({ summary: 'Get all orders for the current customer' })
  async findAllOrdersByCustomerId(@CurrentUser() user: any) {
    const orders = await this.orderService.findAllCustomerOrdersByCustomerId(user.customerId);
    return { success: true, data: orders };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get order details by ID' })
  async findOrderById(@Param('id') id: string) {
    const order = await this.orderService.findOrderById(id);
    return { success: true, data: order };
  }

  @Patch('status')
  @Roles('ADMIN', 'RESTAURANT_MANAGER')
  @ApiOperation({ summary: 'Update order status (Admin/Manager only)' })
  async updateOrderStatus(@Body() updateDto: UpdateOrderStatusDto) {
    const order = await this.orderService.updateOrderStatus(updateDto);
    return { success: true, data: order };
  }

  @Post(':orderId/cancel')
  @Roles('CUSTOMER')
  @ApiOperation({ summary: 'Cancel an order (Customer only)' })
  async cancelOrder(@Param('orderId') orderId: string, @CurrentUser() user: any) {
    const result = await this.orderService.cancelOrder(orderId, user.customerId);
    return { success: true, data: result };
  }

  @Post(':orderId/restaurant-cancel')
  @Roles('RESTAURANT_MANAGER')
  @ApiOperation({ summary: 'Cancel an order by restaurant (Manager only)' })
  async cancelOrderByRestaurant(
    @Param('orderId') orderId: string,
    @CurrentUser() user: any,
    @Body('reason') reason: string,
  ) {
    const result = await this.orderService.cancelOrderByRestaurant(
      orderId,
      user.restaurantId,
      reason,
    );
    return { success: true, data: result };
  }

  @Post()
  @Roles('CUSTOMER')
  @ApiOperation({ summary: 'Place a new order' })
  async placeOrder(
    @CurrentUser() user: any,
    @Body() body: { restaurantId: string; paymentProvider?: string; paymentMethodId?: string },
  ) {
    const result = await this.orderService.placeOrder(
      user.customerId,
      body.restaurantId,
      user.userEmail,
      body.paymentProvider,
      body.paymentMethodId,
    );
    return {
      success: true,
      message: 'Order placed successfully. Complete payment using the clientSecret.',
      data: result,
    };
  }

  @Get(':orderId/tracking')
  @ApiOperation({ summary: 'Get tracking status for an order' })
  async getOrderTracking(@Param('orderId') orderId: string, @CurrentUser() user: any) {
    const tracking = await this.orderTrackingService.getOrderTrackingStatus(orderId, user.customerId);
    return { success: true, data: tracking };
  }

  @Patch('tracking')
  @Roles('RESTAURANT_MANAGER')
  @ApiOperation({ summary: 'Update order tracking status (Manager only)' })
  async updateOrderTracking(
    @CurrentUser() user: any,
    @Body() updateDto: UpdateOrderTrackingStatusDto,
  ) {
    // Ensure managerId is set to the current user
    updateDto.managerId = user.userId;
    const result = await this.orderTrackingService.updateOrderTrackingStatus(updateDto);
    return { success: true, data: result };
  }
}
