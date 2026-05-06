import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../shared/prisma/prisma.service";
import { OrderTrackingQueries, TrackingStatusStep } from "../../../shared/prisma/queries/order-tracking.queries";

@Injectable()
export class OrderTrackingRepository {
    constructor(private readonly prisma: PrismaService,
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
        orderStatusKey: TrackingStatusStep["orderStatusKey"] = "PENDING"
    ) {
        const STATUS_NAMES: Record<string, string> = {
            PENDING:        'Pending',
            ACCEPTED:       'Accepted',
            PREPARING:      'Preparing',
            OUTFORDELIVERY: 'Out For Delivery',
            DELIVERED:      'Delivered',
            CANCELED:       'Canceled',
        };

        return await this.prisma.orderTracking.create({
            data: {
                orderId,
                customerId,
                trackingStatus: [
                    {
                        orderStatusKey,
                        orderStatusName: STATUS_NAMES[orderStatusKey] ?? orderStatusKey,
                        updatedAt: new Date().toISOString(),
                    }
                ] as any,
            }
        });
    }

    async appendOrderTrackingStatus(
        orderId: string,
        customerId: string,
        orderStatusKey: TrackingStatusStep["orderStatusKey"],
        updatedBy?: string
    ) {
        const STATUS_NAMES: Record<string, string> = {
            PENDING:        'Pending',
            ACCEPTED:       'Accepted',
            PREPARING:      'Preparing',
            OUTFORDELIVERY: 'Out For Delivery',
            DELIVERED:      'Delivered',
            CANCELED:       'Canceled',
        };

        return await this.orderTracking.append(orderId, customerId, {
            orderStatusKey,
            orderStatusName: STATUS_NAMES[orderStatusKey] ?? orderStatusKey,
            ...(updatedBy !== undefined ? { updatedBy } : {}),
        });
    }
}
