export interface createRestaurantDto {
    restaurantName: string
    restaurantBio: string
    restaurantLogo?: string
    isAvailable: boolean
    addressId: string
    managerId: string
}
