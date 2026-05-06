import { Module } from "@nestjs/common";
import { RestaurantController } from "./controllers/restaurant.controller";
import { RestaurantService } from "./services/restaurant.service";
import { RestaurantRepository } from "./repositories/restaurant.repository";
import { AddressQueries } from "../../shared/prisma/queries/address.queries";

@Module({
    controllers: [RestaurantController],
    providers: [RestaurantService, RestaurantRepository, AddressQueries],
    exports: [RestaurantService],
})
export class RestaurantModule {}
