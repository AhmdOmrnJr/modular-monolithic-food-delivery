import { Injectable, ForbiddenException, NotFoundException } from "@nestjs/common";
import { EventEmitter2 } from '@nestjs/event-emitter';
import { OrderTrackingRepository } from "../repositories/order-tracking.repository";
import { OrderRepository } from "../repositories/order.repository";
import type { UpdateOrderTrackingStatusDto } from "../dto";
import { ORDER_EVENTS } from '../constants/order.constants';

@Injectable()
export class OrderTrackingService {
    constructor(
        private readonly orderTrackingRepository: OrderTrackingRepository,
        private readonly orderRepository: OrderRepository,
        private readonly eventEmitter: EventEmitter2,
    ) {}

    async getOrderTrackingStatus(orderId: string, customerId: string) {
        const order = await this.orderRepository.findOrderById(orderId);
        if (!order) throw new NotFoundException("Order Not Found");

        if (order.customerId !== customerId) throw new ForbiddenException("You are not authorized to view this order");

        return await this.orderTrackingRepository.getOrderTrackingStatus(orderId, customerId);
    }

    async createOrderTracking(orderId: string, customerId: string, orderStatusKey: string = "PENDING") {
        return await this.orderTrackingRepository.createOrderTracking(orderId, customerId, orderStatusKey as any);
    }

    async updateOrderTrackingStatus(updateDto: UpdateOrderTrackingStatusDto) {
        // Check if order exists and customer is authorized
        await this.getOrderTrackingStatus(
            updateDto.orderId,
            updateDto.customerId
        );

        // If restaurant marks as PREPARING → emit event so the payment module
        // can capture the payment. Payment module owns capture logic, not tracking.
        if (updateDto.orderStatusKey === 'PREPARING') {
            this.eventEmitter.emit(ORDER_EVENTS.PREPARING, { orderId: updateDto.orderId });
        }

        // Emit an event so the OrderService (owner of the orders table) keeps the
        // main order status in sync. This respects module boundaries — tracking
        // service does not mutate order data directly.
        this.eventEmitter.emit(ORDER_EVENTS.TRACKING_UPDATED, {
            orderId: updateDto.orderId,
            orderStatusKey: updateDto.orderStatusKey,
        });

        return await this.orderTrackingRepository.appendOrderTrackingStatus(
            updateDto.orderId,
            updateDto.customerId,
            updateDto.orderStatusKey,
            updateDto.managerId
        );
    }
}
