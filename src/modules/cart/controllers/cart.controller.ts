import { Controller, Post, Get, Body, UseGuards } from "@nestjs/common";
import { CartService } from "../services/cart.service";
import { CartEventService } from "../services/cartEvent.service";
import type { CartEventDTO } from "../dto";
import { AuthGuard } from "../../../shared/guards/auth.guard";
import { RolesGuard } from "../../../shared/guards/roles.guard";
import { Roles } from "../../../shared/decorators/roles.decorator";
import { CurrentUser } from "../../../shared/decorators/current-user.decorator";
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Cart')
@ApiBearerAuth()
@Controller('cart')
@UseGuards(AuthGuard, RolesGuard)
@Roles("CUSTOMER")
export class CartController {
  constructor(
    private readonly cartService: CartService,
    private readonly cartEventService: CartEventService
  ) {}

  @Post('add-cart-event')
  @ApiOperation({ summary: 'Add a cart event (ADD_TO_CART, CLEAR_CART, etc.)' })
  async addCartEvent(@CurrentUser() user: any, @Body() event: CartEventDTO) {
    const customerId = user.customerId;
    const result = await this.cartService.handleCartEvent(event, customerId);
    return { success: true, data: result };
  }

  @Get()
  @ApiOperation({ summary: 'Get current customer cart and items' })
  async getCartWithCartItemsByCustomerId(@CurrentUser() user: any) {
    const customerId = user.customerId;
    const cart = await this.cartService.getCartWithCartItemsByCustomerId(customerId);
    return { success: true, data: cart };
  }

  @Get('events')
  @ApiOperation({ summary: 'Get cart event history for the current customer' })
  async getCartEvents(@CurrentUser() user: any) {
    const customerId = user.customerId;
    const events = await this.cartEventService.getEventsByCustomerId(customerId);
    return { success: true, data: events };
  }
}
