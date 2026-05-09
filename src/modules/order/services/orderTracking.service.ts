import { Injectable, NotFoundException } from "@nestjs/common";
import { EventEmitter2 } from '@nestjs/event-emitter';
import { OrderTrackingRepository } from "../repositories/order-tracking.repository";
import { OrderTrackingStatus, UpdateOrderTrackingStatusDto } from "../dto/orderTrackingStatus.dto";
import { ORDER_EVENTS } from '../constants/order.constants';

@Injectable()
export class OrderTrackingService {
    constructor(
        private readonly orderTrackingRepository: OrderTrackingRepository,
        private readonly eventEmitter: EventEmitter2,
    ) { }

    async getOrderTrackingStatus(orderId: string, customerId: string) {
        return await this.orderTrackingRepository.getOrderTrackingStatus(orderId, customerId);
    }

    async createOrderTracking(
        orderId: string,
        customerId: string,
        orderStatusKey: OrderTrackingStatus = OrderTrackingStatus.PENDING
    ) {
        return await this.orderTrackingRepository.createOrderTracking(orderId, customerId, orderStatusKey);
    }

    async updateOrderTrackingStatus(updateDto: UpdateOrderTrackingStatusDto) {
        // Update in exactly ONE database trip using native raw SQL query
        const updated = await this.orderTrackingRepository.appendOrderTrackingStatus(
            updateDto.orderId,
            updateDto.customerId,
            updateDto.orderStatusKey,
            updateDto.managerId
        );
        
        // If restaurant marks as PREPARING → emit event so the payment module
        // can capture the payment. Payment module owns capture logic, not tracking.
        if (updateDto.orderStatusKey === OrderTrackingStatus.PREPARING) {
            this.eventEmitter.emit(ORDER_EVENTS.PREPARING, { orderId: updateDto.orderId });
        }

        return updated;
    }
}
