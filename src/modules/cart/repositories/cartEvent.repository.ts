import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../shared/prisma/prisma.service";
import { CreateCartEventDTO } from "../dto";
import { Prisma } from "../../../generated/prisma";

@Injectable()
export class CartEventRepository {
    constructor(private readonly prisma: PrismaService) {}

    async createEvent(data: CreateCartEventDTO, tx?: Prisma.TransactionClient) {
        const client = tx || this.prisma;
        return await client.cartEvent.create({
            data: {
                customerId: data.customerId,
                eventType: data.eventType,
                menuItemId: data.menuItemId ?? null,
                itemName: data.itemName ?? null,
                quantity: data.quantity ?? null,
                price: data.price ?? null,
            },
        });
    }

    async getEventsByCustomerId(customerId: string) {
        return await this.prisma.cartEvent.findMany({
            where: { customerId },
            orderBy: { eventDate: "desc" },
        });
    }
}
