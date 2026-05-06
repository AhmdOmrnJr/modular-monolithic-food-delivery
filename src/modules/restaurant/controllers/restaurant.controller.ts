import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards } from "@nestjs/common";
import { RestaurantService } from "../services/restaurant.service";
import { AuthGuard } from "../../../shared/guards/auth.guard";
import { RolesGuard } from "../../../shared/guards/roles.guard";
import { Roles } from "../../../shared/decorators/roles.decorator";
import { CurrentUser } from "../../../shared/decorators/current-user.decorator";
import type { PaginationDto } from "../../../shared/utils/pagination.utils";
import type { createRestaurantDto, updateRestaurantDto, updateRestaurantRatingDto, CreateAddressDTO, UpdateAddressDTO } from "../dto";
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Restaurant')
@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) { }

    // GET /restaurant/me — get the restaurant owned by the logged-in manager
    @Get('me')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get current manager\'s restaurant' })
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async findRestaurantByManagerId(@CurrentUser() user: any) {
        const restaurant = await this.restaurantService.findRestaurantByManagerId(user.userId);
        return { success: true, message: "Restaurant found successfully", data: restaurant };
    }

    // GET /restaurant — list all restaurants (public)
    @Get()
    @ApiOperation({ summary: 'List all restaurants' })
    async findAllRestaurants(@Query() query: PaginationDto) {
        const result = await this.restaurantService.findAllRestaurants(query);
        return { success: true, message: "Restaurants fetched successfully", ...result };
    }

    // GET /restaurant/search?restaurantName=... — search (public)
    @Get('search')
    @ApiOperation({ summary: 'Search restaurants by name' })
    async searchRestaurants(@Query('restaurantName') query: string) {
        const restaurants = await this.restaurantService.searchRestaurants(query);
        return { success: true, data: restaurants };
    }

    // GET /restaurant/:restaurantId — get by ID (public)
    @Get(':restaurantId')
    @ApiOperation({ summary: 'Get restaurant details by ID' })
    async findRestaurantById(@Param('restaurantId') restaurantId: string) {
        const restaurant = await this.restaurantService.findRestaurantByRestaurantId(restaurantId);
        return { success: true, message: "Restaurant found successfully", data: restaurant };
    }

    // POST /restaurant — create (authenticated)
    @Post()
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Create a new restaurant (Admin only)' })
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("ADMIN")
    async createRestaurant(@Body() data: createRestaurantDto) {
        const restaurant = await this.restaurantService.createRestaurant(data);
        return { success: true, message: "Restaurant created successfully", data: restaurant };
    }

    // PUT /restaurant/update — update restaurant details (authenticated, manager)
    @Put('update')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Update restaurant details (Manager only)' })
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async updateRestaurant(@Body() data: updateRestaurantDto) {
        const restaurant = await this.restaurantService.updateRestaurant(data);
        return { success: true, message: "Restaurant updated successfully", data: restaurant };
    }

    // PUT /restaurant/update-rating — update rating (authenticated)
    @Put('update-rating')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Update restaurant rating (Internal)' })
    @UseGuards(AuthGuard)
    async updateRestaurantRating(@Body() data: updateRestaurantRatingDto) {
        const restaurant = await this.restaurantService.updateRestaurantRating(data);
        return { success: true, message: "Restaurant rating updated successfully", data: restaurant };
    }

    // PUT /restaurant/enable-disable — toggle availability (authenticated, manager)
    @Put('enable-disable')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Toggle restaurant availability (Manager only)' })
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async enableOrDisableRestaurant(@Body('restaurantId') restaurantId: string) {
        const restaurant = await this.restaurantService.enableOrDisableRestaurant(restaurantId);
        return { success: true, message: "Restaurant status updated", data: restaurant };
    }

    // DELETE /restaurant — delete (authenticated)
    @Delete()
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Delete a restaurant' })
    @UseGuards(AuthGuard)
    async deleteRestaurant(@Body('restaurantId') restaurantId: string) {
        const restaurant = await this.restaurantService.deleteRestaurant(restaurantId);
        return { success: true, message: "Restaurant deleted successfully", data: restaurant };
    }

    // ── Address Management ────────────────────────────────────────────────────

    // POST /restaurant/addresses (body: { restaurantId, ...addressData })
    @Post('addresses')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Add a new address to a restaurant (Manager only)' })
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async addAddress(@Body() body: CreateAddressDTO & { restaurantId: string }) {
        const { restaurantId, ...addressData } = body;
        const address = await this.restaurantService.addAddress(restaurantId, addressData);
        return { success: true, data: address };
    }

    // GET /restaurant/:restaurantId/addresses (public)
    @Get(':restaurantId/addresses')
    @ApiOperation({ summary: 'Get all addresses for a restaurant' })
    async getAddresses(@Param('restaurantId') restaurantId: string) {
        const addresses = await this.restaurantService.getAddresses(restaurantId);
        return { success: true, data: addresses };
    }

    // PUT /restaurant/addresses/:addressId (body: { restaurantId, ...updateData })
    @Put('addresses/:addressId')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Update a restaurant address (Manager only)' })
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async updateAddress(
        @Param('addressId') addressId: string,
        @Body() body: UpdateAddressDTO & { restaurantId: string },
    ) {
        const { restaurantId, ...updateData } = body;
        const address = await this.restaurantService.updateAddress(restaurantId, addressId, updateData);
        return { success: true, data: address };
    }

    // DELETE /restaurant/addresses/:addressId (body: { restaurantId })
    @Delete('addresses/:addressId')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Delete a restaurant address (Manager only)' })
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("RESTAURANT_MANAGER")
    async deleteAddress(
        @Param('addressId') addressId: string,
        @Body('restaurantId') restaurantId: string,
    ) {
        await this.restaurantService.deleteAddress(restaurantId, addressId);
        return { success: true, message: "Address deleted successfully" };
    }
}
