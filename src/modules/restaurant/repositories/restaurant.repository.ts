import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../shared/prisma/prisma.service";
import { handleQueryPagination, PaginationDto } from "../../../shared/utils/pagination.utils";
import { createRestaurantDto, updateRestaurantDto, updateRestaurantRatingDto } from "../dto";

@Injectable()
export class RestaurantRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findRestaurantByManagerId(userId: string) {
        const restaurant = await this.prisma.restaurant.findUnique({
            where: {
                managerId: userId,
            },
        });

        if (!restaurant) throw new NotFoundException("Restaurant not found");

        return restaurant;
    }

    async findRestaurantByRestaurantId(restaurantId: string) {
        const restaurant = await this.prisma.restaurant.findUniqueOrThrow({
            where: { restaurantId },
        });

        if (!restaurant) throw new NotFoundException("Restaurant not found");

        return restaurant;
    }

    // async findRestaurantByRestaurantName(restaurantName: string) {
    //     const restaurant = await prisma.restaurant.findUniqueOrThrow({
    //         where: { restaurantName }
    //     })

    //     if (!restaurant)
    //         throw NotFoundError("Restaurant not found");

    //     return restaurant;
    // }

    async findAllRestaurants(query: PaginationDto) {
        const restaurants = await this.prisma.restaurant.findMany({
            select: {
                restaurantId: true,
                restaurantName: true,
                isAvailable: true,
                averageRating: true,
                ratingCount: true,
            },
            ...handleQueryPagination(query),
        });

        const total = await this.prisma.restaurant.count();
        return { restaurants, total };
    }

    async createRestaurant(data: createRestaurantDto) {
        const restaurant = await this.prisma.restaurant.create({
            data: {
                ...data,
            },
        });

        if (!restaurant) throw new BadRequestException("Failed To Create Restaurant");

        return restaurant;
    }

    async updateRestaurant(data: updateRestaurantDto) {
        try {
            const restaurant = await this.prisma.restaurant.update({
                where: { restaurantId: data.restaurantId },
                data: {
                    ...data,
                },
            });

            return restaurant;
        } catch (error: any) {
            if (error.code === "P2025") {
                throw new NotFoundException("Restaurant not found", error);
            }
            throw new BadRequestException("Failed To Update Restaurant", error);
        }
    }

    async enableOrDisableRestaurant(restaurantId: string) {
        const restaurant = await this.findRestaurantByRestaurantId(restaurantId);
        if (!restaurant) throw new NotFoundException("Restaurant not found");

        const updatedRestaurant = await this.prisma.restaurant.update({
            where: { restaurantId },
            data: {
                isAvailable: !restaurant.isAvailable,
            },
        });

        if (!updatedRestaurant) throw new BadRequestException("Failed To Update Restaurant");

        return updatedRestaurant;
    }

    async updateRestaurantRating(data: updateRestaurantRatingDto) {
        try {
            const restaurant = await this.prisma.restaurant.update({
                where: { restaurantId: data.restaurantId },
                data: {
                    averageRating: data.averageRating,
                    ratingCount: data.ratingCount,
                },
            });

            return restaurant;
        } catch (error: any) {
            if (error.code === "P2025") {
                throw new NotFoundException("Restaurant not found", error);
            }
            throw new BadRequestException("Failed To Update Restaurant Rating", error);
        }
    }

    async searchRestaurants(query: string) {
        return await this.prisma.restaurant.findMany({
            where: {
                restaurantName: {
                    contains: query,
                    mode: "insensitive",
                },
            },
        });
    }

    async deleteRestaurant(restaurantId: string) {
        const restaurant = await this.findRestaurantByRestaurantId(restaurantId);
        if (!restaurant) throw new NotFoundException("Restaurant not found");

        const deletedRestaurant = await this.prisma.restaurant.delete({
            where: { restaurantId },
        });

        if (!deletedRestaurant) throw new BadRequestException("Failed To Delete Restaurant");

        return deletedRestaurant;
    }
}
