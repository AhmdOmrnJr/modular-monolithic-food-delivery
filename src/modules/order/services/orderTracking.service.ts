import { Injectable, NotFoundException, Inject } from "@nestjs/common";
import type { IPaymentModuleApi } from "../../payment/interfaces/payment-module.interface";
import { PAYMENT_MODULE_API } from "../../payment/interfaces/payment-module.interface";
import { OrderTrackingRepository } from "../repositories/order-tracking.repository";
import { OrderTrackingStatus, UpdateOrderTrackingStatusDto } from "../dto/orderTrackingStatus.dto";

@Injectable()
export class OrderTrackingService {
    constructor(
        private readonly orderTrackingRepository: OrderTrackingRepository,
        @Inject(PAYMENT_MODULE_API) private readonly paymentApi: IPaymentModuleApi,
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
        // If restaurant marks as PREPARING → capture the payment.
        // Payment module owns capture logic, not tracking.
        if (updateDto.orderStatusKey === OrderTrackingStatus.PREPARING) {
            await this.paymentApi.capturePayment(updateDto.orderId);
        }

        return updated;
    }
}
