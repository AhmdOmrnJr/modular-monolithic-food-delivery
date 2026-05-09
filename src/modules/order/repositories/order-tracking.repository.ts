import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../shared/prisma/prisma.service";
import { OrderTrackingQueries } from "../../../shared/prisma/queries/order-tracking.queries";
import { OrderTrackingStatus } from "../dto/orderTrackingStatus.dto";

@Injectable()
export class OrderTrackingRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly orderTracking: OrderTrackingQueries
    ) {}

    async getOrderTrackingStatus(orderId: string, customerId: string) {
        const tracking = await this.prisma.orderTracking.findUnique({
            where: { orderId_customerId: { orderId, customerId } },
            select: { orderId: true, customerId: true, trackingStatus: true }
        });

        if (!tracking) throw new NotFoundException("Order tracking not found");

        return tracking;
    }

    async createOrderTracking(
        orderId: string,
        customerId: string,
        orderStatusKey: OrderTrackingStatus = OrderTrackingStatus.PENDING
    ) {
        return await this.prisma.orderTracking.create({
            data: {
                orderId,
                customerId,
                trackingStatus: [
                    {
                        orderStatusKey,
                        orderStatusName: orderStatusKey, // Use the enum value directly as the name
                        updatedAt: new Date().toISOString(),
                    }
                ] as any,
            }
        });
    }

    async appendOrderTrackingStatus(
        orderId: string,
        customerId: string,
        orderStatusKey: OrderTrackingStatus,
        updatedBy?: string
    ) {
        return await this.orderTracking.append(orderId, customerId, {
            orderStatusKey,
            orderStatusName: orderStatusKey, // Use the enum value directly as the name
            ...(updatedBy !== undefined ? { updatedBy } : {}),
        });
    }
}