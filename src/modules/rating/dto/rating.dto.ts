import { RatingScore } from "../../../generated/prisma";

export type CreateCustomerRatingDto = {
    customerId: string;
    restaurantId: string;
    ratingScore: RatingScore
    review?: string
}

export type UpdateCustomerRatingDto = {
    ratingId: string
    customerId: string;
    restaurantId: string;
    ratingScore: RatingScore
    review?: string
}
