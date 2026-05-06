export interface PaymentAuthorizedPayload {
  orderId: string;
  customerId: string;
  transactionId: string;
  amount: number;
}

export interface PaymentCapturedPayload {
  orderId: string;
  customerId: string;
  transactionId: string;
  amount: number;
}

export interface PaymentFailedPayload {
  orderId: string;
  customerId?: string;
  transactionId?: string;
  error?: string;
}

export interface StalePaymentPayload {
  orderId: string;
  transactionId?: string;
  reason?: string;
}
