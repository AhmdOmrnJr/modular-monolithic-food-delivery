import { Injectable } from "@nestjs/common";
import { RestaurantRepository } from "../repositories/restaurant.repository";
import { CreateAddressDTO, createRestaurantDto, UpdateAddressDTO, updateRestaurantDto, updateRestaurantRatingDto } from "../dto";
import { formatPagination, Pagination, PaginationDto } from "../../../shared/utils/pagination.utils";
import { AddressQueries } from "../../../shared/prisma/queries/address.queries";

@Injectable()
export class RestaurantService {
    constructor(
        private readonly restaurantRepository: RestaurantRepository,
        private readonly addressQueries: AddressQueries) { }

    async findRestaurantByManagerId(managerId: string) {
        return await this.restaurantRepository.findRestaurantByManagerId(managerId)
    }

    async findRestaurantByRestaurantId(restaurantId: string) {
        return await this.restaurantRepository.findRestaurantByRestaurantId(restaurantId);
    }

    async findAllRestaurants(query: PaginationDto): Promise<{
        data: {
            restaurantId: string;
            restaurantName: string;
            isAvailable: boolean;
            averageRating: number;
            ratingCount: number;
        }[];
        meta: Pagination;
    }> {
        const { restaurants, total } = await this.restaurantRepository.findAllRestaurants(query);

        return {
            data: restaurants,
            meta: formatPagination({
                page: Number(query.page),
                perPage: Number(query.perPage),
                total,
            }),
        };
    }

    async createRestaurant(data: createRestaurantDto) {
        return await this.restaurantRepository.createRestaurant(data);
    }

    async updateRestaurantRating(data: updateRestaurantRatingDto) {
        return await this.restaurantRepository.updateRestaurantRating(data);
    }

    async updateRestaurant(data: updateRestaurantDto) {
        return await this.restaurantRepository.updateRestaurant(data);
    }

    async enableOrDisableRestaurant(restaurantId: string) {
        return await this.restaurantRepository.enableOrDisableRestaurant(restaurantId);
    }

    async searchRestaurants(query: string) {
        return await this.restaurantRepository.searchRestaurants(query);
    }

    async deleteRestaurant(restaurantId: string) {
        return await this.restaurantRepository.deleteRestaurant(restaurantId);
    }

    // Address Management
    async addAddress(restaurantId: string, data: CreateAddressDTO) {
        if (data.isPrimary) await this.addressQueries.unsetPrimary('restaurant', restaurantId);

        return await this.addressQueries.add('restaurant', restaurantId, data);
    }

    async updateAddress(
        restaurantId: string,
        addressId: string,
        data: UpdateAddressDTO
    ) {
        if (data.isPrimary) {
            await this.addressQueries.unsetPrimary('restaurant', restaurantId, addressId);
        }
        return await this.addressQueries.update('restaurant', restaurantId, addressId, data);
    }

    async deleteAddress(restaurantId: string, addressId: string) {
        return await this.addressQueries.remove('restaurant', restaurantId, addressId);
    }

    async getAddresses(restaurantId: string) {
        return await this.addressQueries.list('restaurant', restaurantId);
    }

    async getAddressById(restaurantId: string, addressId: string) {
        return await this.addressQueries.findById('restaurant', restaurantId, addressId);
    }
}
