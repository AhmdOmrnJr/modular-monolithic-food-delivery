import { Controller, Get, Patch, Post, Body, Req, UseGuards, Param, Put, Delete, UsePipes } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { AuthGuard } from '../../../shared/guards/auth.guard';
import { RolesGuard } from '../../../shared/guards/roles.guard';
import { Roles } from '../../../shared/decorators/roles.decorator';
import { CurrentUser } from '../../../shared/decorators/current-user.decorator';
import { createCustomerRatingSchema } from '../dto/customer.dto';
import { JoiValidationPipe } from '../../../shared/pipes/joi-validation.pipe';

@Controller('customers')
@UseGuards(AuthGuard)
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('orders')
  async getCustomerOrdersByCustomerId(@CurrentUser() user: any) {
    const customerId = user.customerId;
    const orders = await this.customerService.findCustomerOrdersByCustomerId(customerId);
    return { success: true, message: 'Orders fetched successfully', data: orders };
  }

  @Get('orders/:order_id')
  async findCustomerOrderByCustomerId(@CurrentUser() user: any, @Param('order_id') orderId: string) {
    const customerId = user.customerId;
    const order = await this.customerService.findCustomerOrderByCustomerId(customerId, orderId);
    return { success: true, message: 'Order fetched successfully', data: order };
  }

  @Patch('deactivate')
  async deactivateAccount(@CurrentUser() user: any) {
    const customerId = user.customerId;
    const result = await this.customerService.deactivateAccount(customerId);
    return { success: true, message: 'Customer account deactivated successfully', data: result };
  }

  @Post('rating')
  @UseGuards(RolesGuard)
  @Roles('CUSTOMER')
  @UsePipes(new JoiValidationPipe(createCustomerRatingSchema))
  async createRatingByCustomer(@CurrentUser() user: any, @Body() body: any) {
    const customerId = user.customerId;
    const ratingCustomer = await this.customerService.createRatingByCustomer(customerId, body);
    return { success: true, message: 'Rating created successfully', data: ratingCustomer };
  }

  // Address Management
  @Post('addresses')
  async createAddress(@CurrentUser() user: any, @Body() body: any) {
    const customerId = user.customerId;
    const address = await this.customerService.addAddress(customerId, body);
    return { success: true, data: address };
  }

  @Get('addresses')
  async getMyAddresses(@CurrentUser() user: any) {
    const customerId = user.customerId;
    const addresses = await this.customerService.getAddresses(customerId);
    return { success: true, data: addresses };
  }

  @Put('addresses/:addressId')
  async updateAddress(@CurrentUser() user: any, @Param('addressId') addressId: string, @Body() body: any) {
    const customerId = user.customerId;
    const address = await this.customerService.updateAddress(customerId, addressId, body);
    return { success: true, data: address };
  }

  @Delete('addresses/:addressId')
  async deleteAddress(@CurrentUser() user: any, @Param('addressId') addressId: string) {
    const customerId = user.customerId;
    await this.customerService.deleteAddress(customerId, addressId);
    return { success: true, message: 'Address deleted successfully' };
  }
}
