export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  message?: string;
  clientSecret?: string;
  requiresAction?: boolean;
}

export interface RefundResult {
  success: boolean;
  refundId: string;
  message?: string;
}

export interface CaptureResult {
  success: boolean;
  message?: string;
}
