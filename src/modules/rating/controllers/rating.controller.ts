import { Controller, Get, Post, Body, UseGuards, Patch, Delete, Param } from "@nestjs/common";
import { RatingService } from "../services/rating.service";
import { AuthGuard } from "../../../shared/guards/auth.guard";
import { RolesGuard } from "../../../shared/guards/roles.guard";
import { Roles } from "../../../shared/decorators/roles.decorator";
import { CurrentUser } from "../../../shared/decorators/current-user.decorator";
import type { CreateCustomerRatingDto, UpdateCustomerRatingDto } from "../dto/rating.dto";
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Ratings')
@ApiBearerAuth()
@Controller('ratings')
@UseGuards(AuthGuard, RolesGuard)
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Get('restaurant/:restaurantId')
  @ApiOperation({ summary: 'Get all ratings for a restaurant' })
  async findRatingsByRestaurantId(@Param('restaurantId') restaurantId: string) {
    const ratings = await this.ratingService.findRatingsByRestaurantId(restaurantId);
    return { success: true, data: ratings };
  }

  @Get('customer')
  @Roles('CUSTOMER')
  @ApiOperation({ summary: 'Get all ratings by the current customer' })
  async findRatingsByCustomerId(@CurrentUser() user: any) {
    const ratings = await this.ratingService.findRatingsByCustomerId(user.customerId);
    return { success: true, data: ratings };
  }

  @Post('restaurant/check')
  @Roles('CUSTOMER')
  @ApiOperation({ summary: 'Check if current customer has rated a specific restaurant' })
  async findRatingByRestaurantIdAndCustomerId(
    @CurrentUser() user: any,
    @Body('restaurantId') restaurantId: string,
  ) {
    const rating = await this.ratingService.findRatingByRestaurantIdAndCustomerId(
      restaurantId,
      user.customerId
    );
    return { success: true, data: rating };
  }

  @Get('top-rated')
  @ApiOperation({ summary: 'Get top rated restaurants' })
  async findTopRatedRestaurants() {
    const restaurants = await this.ratingService.findTopRatedRestaurants();
    return { success: true, data: restaurants };
  }

  @Post()
  @Roles('CUSTOMER')
  @ApiOperation({ summary: 'Create a new rating for a restaurant' })
  async createRatingByCustomer(
    @CurrentUser() user: any,
    @Body() body: Omit<CreateCustomerRatingDto, 'customerId'>,
  ) {
    const rating = await this.ratingService.createRatingByCustomer({
      ...body,
      customerId: user.customerId,
    });
    return { success: true, data: rating };
  }

  @Patch()
  @Roles('CUSTOMER')
  @ApiOperation({ summary: 'Update an existing rating' })
  async updateRatingByRestaurantIdAndCustomerId(
    @CurrentUser() user: any,
    @Body() body: UpdateCustomerRatingDto,
  ) {
    // Ensure the customer can only update their own rating
    const rating = await this.ratingService.updateRatingByRestaurantIdAndCustomerId({
      ...body,
      customerId: user.customerId,
    });
    return { success: true, data: rating };
  }

  @Delete(':ratingId')
  @Roles('CUSTOMER', 'ADMIN')
  @ApiOperation({ summary: 'Delete a rating' })
  async deleteRating(@Param('ratingId') ratingId: string) {
    const rating = await this.ratingService.deleteRatingByRestaurantIdAndCustomerId(ratingId);
    return { success: true, data: rating };
  }
}
