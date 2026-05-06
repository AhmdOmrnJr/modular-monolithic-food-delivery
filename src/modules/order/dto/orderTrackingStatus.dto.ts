export type TrackingStatusStep = {
  orderStatusKey: "PENDING" | "ACCEPTED" | "PREPARING" | "OUTFORDELIVERY" | "DELIVERED" | "CANCELED";
  updatedAt: Date;
  updatedBy?: string
}

export type OrderTrackingStatusDto = {
  orderId: string;
  customerId: string;
  trackingStatus: TrackingStatusStep[];
}

export type UpdateOrderTrackingStatusDto = {
  orderId: string
  managerId: string
  customerId: string
  orderStatusKey: TrackingStatusStep["orderStatusKey"]
}
