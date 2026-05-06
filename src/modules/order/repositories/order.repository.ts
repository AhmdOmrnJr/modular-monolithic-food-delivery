import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../../../shared/prisma/prisma.service";
import { CreateOrderDto, UpdateOrderStatusDto } from "../dto";
import { OrderStatusKey, Prisma } from "../../../generated/prisma";

@Injectable()
export class OrderRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findAllCustomerOrdersByCustomerId(customerId: string) {
        const orders = await this.prisma.order.findMany({
            where: { customerId },
            include: { orderItems: true },
            orderBy: { createdAt: "desc" }
        });

        if (!orders) throw new NotFoundException("No Orders Found For This Customer");

        return orders;
    }

    async findOrderByOrderIdAndCustomerId(orderId: string, customerId: string) {
        return await this.prisma.order.findUniqueOrThrow({
            where: { orderId, customerId },
            include: { orderItems: true }
        });
    }

    async findOrderById(orderId: string) {
        return await this.prisma.order.findUniqueOrThrow({
            where: { orderId },
            include: { orderItems: true }
        });
    }

    async updateOrderStatus(data: UpdateOrderStatusDto, tx?: Prisma.TransactionClient) {
        const client = tx || this.prisma;
        const updatedStatus = await client.order.update({
            where: { orderId: data.orderId },
            data: { orderStatus: data.newOrderStatus },
        });

        if (!updatedStatus) throw new BadRequestException("Failed To Update Order");

        return updatedStatus;
    }

    async cancelOrder(orderId: string) {
        try {
            return await this.prisma.order.update({
                where: { orderId },
                data: { orderStatus: OrderStatusKey.CANCELED },
            });
        } catch (error: any) {
            throw new BadRequestException("Failed To Cancel Order");
        }
    }

    async createOrder(createOrderDto: CreateOrderDto, tx?: Prisma.TransactionClient) {
        const client = tx || this.prisma;
        const { customerId, restaurantId, cartItems, orderStatus } = createOrderDto;

        const totalAmount = cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        const newOrder = await client.order.create({
            data: {
                customerId,
                restaurantId,
                totalAmount,
                orderStatus,
                orderItems: {
                    create: cartItems.map((item) => ({
                        menuItemId: item.menuItemId,
                        quantity: item.quantity,
                        price: item.price,
                    })),
                },
                orderTracking: {
                    create: {
                        customerId,
                        trackingStatus: [
                            {
                                orderStatusKey: "PENDING",
                                orderStatusName: "Pending",
                                updatedAt: new Date().toISOString(),
                            },
                        ] as any,
                    },
                },
            },
            include: { orderItems: true },
        });

        if (!newOrder) throw new BadRequestException("Failed To Create Order");

        return newOrder;
    }

    async findStaleOrders({ status, createdBefore }: { status: OrderStatusKey; createdBefore: Date }) {
        return await this.prisma.order.findMany({
            where: {
                orderStatus: status,
                createdAt: { lt: createdBefore },
            },
            include: { orderItems: true },
        });
    }
}
