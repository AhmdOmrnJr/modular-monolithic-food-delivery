import { Injectable, BadRequestException } from "@nestjs/common";
import { RatingRepository } from "../repositories/rating.repository";
import { RestaurantService } from "../../restaurant/services/restaurant.service";
import { CreateCustomerRatingDto, UpdateCustomerRatingDto } from "../dto/rating.dto";

@Injectable()
export class RatingService {
  constructor(
    private readonly ratingRepository: RatingRepository,
    private readonly restaurantService: RestaurantService,
  ) {}

  async findRatingsByRestaurantId(restaurantId: string) {
    return await this.ratingRepository.findRatingsByRestaurantId(restaurantId);
  }

  async findRatingsByCustomerId(customerId: string) {
    return await this.ratingRepository.findRatingsByCustomerId(customerId);
  }

  async findRatingByRestaurantIdAndCustomerId(restaurantId: string, customerId: string) {
    return await this.ratingRepository.findRatingByRestaurantIdAndCustomerId(restaurantId, customerId);
  }

  async findTopRatedRestaurants() {
    return await this.ratingRepository.findTopRatedRestaurants();
  }

  async createRatingByCustomer(createCustomerRatingDto: CreateCustomerRatingDto) {
    const restaurant = await this.restaurantService.findRestaurantByRestaurantId(createCustomerRatingDto.restaurantId);

    if (!restaurant) {
      throw new BadRequestException('Restaurant not found');
    }

    const rating = await this.ratingRepository.createRatingByCustomer(createCustomerRatingDto);

    await this.syncRestaurantRatingStats(createCustomerRatingDto.restaurantId);

    return rating;
  }

  async updateRatingByRestaurantIdAndCustomerId(data: UpdateCustomerRatingDto) {
    const rating = await this.ratingRepository.updateRatingByRestaurantIdAndCustomerId(data);

    await this.syncRestaurantRatingStats(rating.restaurantId);

    return rating;
  }

  async deleteRatingByRestaurantIdAndCustomerId(ratingId: string) {
    const rating = await this.ratingRepository.deleteRatingByRestaurantIdAndCustomerId(ratingId);

    await this.syncRestaurantRatingStats(rating.restaurantId);

    return rating;
  }

  private async syncRestaurantRatingStats(restaurantId: string) {
    const stats = await this.ratingRepository.calculateRestaurantRatingStats(restaurantId);
    await this.restaurantService.updateRestaurantRating({
      restaurantId,
      averageRating: stats.averageRating,
      ratingCount: stats.ratingCount
    });
  }
}
