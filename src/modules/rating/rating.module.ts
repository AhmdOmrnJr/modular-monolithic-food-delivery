import { Module } from '@nestjs/common';
import { RatingController } from './controllers/rating.controller';
import { RatingService } from './services/rating.service';
import { RatingRepository } from './repositories/rating.repository';
import { RestaurantModule } from '../restaurant/restaurant.module';

@Module({
  imports: [RestaurantModule],
  controllers: [RatingController],
  providers: [RatingService, RatingRepository],
  exports: [RatingService],
})
export class RatingModule {}
