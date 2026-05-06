import { Injectable } from "@nestjs/common";
import { CreateCartEventDTO } from "../dto";
import { CartEventRepository } from "../repositories/cartEvent.repository";
import { Prisma } from "../../../generated/prisma";

@Injectable()
export class CartEventService {
    constructor(private readonly cartEventRepository: CartEventRepository) {}

    async createEvent(data: CreateCartEventDTO, tx?: Prisma.TransactionClient) {
        return await this.cartEventRepository.createEvent(data, tx);
    }

    async getEventsByCustomerId(customerId: string) {
        return await this.cartEventRepository.getEventsByCustomerId(customerId);
    }
}
