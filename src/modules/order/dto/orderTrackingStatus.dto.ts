export enum OrderTrackingStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  PREPARING = "PREPARING",
  OUTFORDELIVERY = "OUTFORDELIVERY",
  DELIVERED = "DELIVERED",
  CANCELED = "CANCELED",
}

export type TrackingStatusStep = {
  orderStatusKey: OrderTrackingStatus;
  updatedAt: Date;
  updatedBy?: string;
}

export type OrderTrackingStatusDto = {
  orderId: string;
  customerId: string;
  trackingStatus: TrackingStatusStep[];
}

export type UpdateOrderTrackingStatusDto = {
  orderId: string;
  managerId: string;
  customerId: string;
  orderStatusKey: OrderTrackingStatus;
}
