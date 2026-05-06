import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../../../shared/prisma/prisma.service";
import { CreateCustomerRatingDto, UpdateCustomerRatingDto } from "../dto/rating.dto";
import { RatingScore } from "../../../generated/prisma";

@Injectable()
export class RatingRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findRatingsByRestaurantId(restaurantId: string) {
    const ratings = await this.prisma.rating.findMany({
      where: { restaurantId }
    });

    if (!ratings || ratings.length === 0)
      throw new NotFoundException("No Ratings found For This Restaurant");

    return ratings;
  }

  async findRatingsByCustomerId(customerId: string) {
    const ratings = await this.prisma.rating.findMany({
      where: { customerId }
    });

    if (!ratings || ratings.length === 0)
      throw new NotFoundException("No Ratings found For This Customer");

    return ratings;
  }

  async findRatingByRestaurantIdAndCustomerId(restaurantId: string, customerId: string) {
    const ratings = await this.prisma.rating.findMany({
      where: {
        restaurantId,
        customerId
      }
    });

    if (!ratings || ratings.length === 0)
      throw new NotFoundException("You have not Rated This Restaurant");

    return ratings;
  }

  async findTopRatedRestaurants() {
    return await this.prisma.restaurant.findMany({
      where: {
        averageRating: {
          gte: 4.0
        }
      },
      orderBy: {
        averageRating: 'desc'
      }
    });
  }

  async createRatingByCustomer(createCustomerRatingDto: CreateCustomerRatingDto) {
    return await this.prisma.rating.create({
      data: {
        customerId: createCustomerRatingDto.customerId,
        restaurantId: createCustomerRatingDto.restaurantId,
        ratingScore: createCustomerRatingDto.ratingScore,
        review: createCustomerRatingDto.review ?? null
      }
    });
  }

  async updateRatingByRestaurantIdAndCustomerId(data: UpdateCustomerRatingDto) {
    try {
      return await this.prisma.rating.update({
        where: {
          ratingId: data.ratingId
        },
        data: {
          ratingScore: data.ratingScore,
          ...(data.review !== undefined && { review: data.review })
        }
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new NotFoundException("Rating not found");
      }
      throw new BadRequestException("Failed To Update Rating");
    }
  }

  async deleteRatingByRestaurantIdAndCustomerId(ratingId: string) {
    try {
      return await this.prisma.rating.delete({
        where: { ratingId }
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new NotFoundException("Rating not found");
      }
      throw new BadRequestException("Failed To Delete Rating");
    }
  }

  async calculateRestaurantRatingStats(restaurantId: string): Promise<{ averageRating: number; ratingCount: number }> {
    const ratings = await this.prisma.rating.findMany({
      where: { restaurantId }
    });

    if (ratings.length === 0) {
      return { averageRating: 0, ratingCount: 0 };
    }

    const totalScore = ratings.reduce((sum, r) => sum + this.getRatingValue(r.ratingScore), 0);
    const averageRating = totalScore / ratings.length;

    return {
      averageRating: parseFloat(averageRating.toFixed(1)),
      ratingCount: ratings.length
    };
  }

  private getRatingValue(score: RatingScore): number {
    const values: Record<RatingScore, number> = {
      [RatingScore.ONE]: 1,
      [RatingScore.TWO]: 2,
      [RatingScore.THREE]: 3,
      [RatingScore.FOUR]: 4,
      [RatingScore.FIVE]: 5
    };
    return values[score];
  }
}
