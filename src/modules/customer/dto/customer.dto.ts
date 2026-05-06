import * as Joi from 'joi';
import { RatingScore } from '../../../generated/prisma';

export interface CreateCustomerRatingDto {
  restaurantId: string;
  ratingScore: RatingScore;
  review?: string;
}

export const createCustomerRatingSchema = Joi.object<CreateCustomerRatingDto>({
  restaurantId: Joi.string().uuid().required(),
  ratingScore: Joi.string()
    .valid(...Object.values(RatingScore))
    .required(),
  review: Joi.string().optional(),
});
