import { Module } from "@nestjs/common";
import { CartController } from "./controllers/cart.controller";
import { CartService } from "./services/cart.service";
import { CartEventService } from "./services/cartEvent.service";
import { CartRepository } from "./repositories/cart.repository";
import { CartEventRepository } from "./repositories/cartEvent.repository";
import { CartQueries } from "src/shared/prisma/queries/cart.query";
import { MenuModule } from "../menu/menu.module";

@Module({
    imports: [MenuModule],
    controllers: [CartController],
    providers: [
        CartService,
        CartEventService,
        CartRepository,
        CartEventRepository,
        CartQueries,
    ],
    exports: [CartService],
})
export class CartModule {}
