import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '../../../generated/prisma';

export interface TrackingStatusStep {
  orderStatusName: string;
  orderStatusKey: string;
  timestamp?: string;
  notes?: string;
  updatedBy?: string;
  updatedAt: Date;
}

@Injectable()
export class OrderTrackingQueries {
  constructor(private readonly prisma: PrismaService) {}

  async append(
    orderId: string,
    customerId: string,
    stepData: Omit<TrackingStatusStep, 'updatedAt'>,
    tx?: Prisma.TransactionClient
  ): Promise<any> {
    const client = tx || this.prisma;

    const stepJson = JSON.stringify([
      {
        ...stepData,
        updatedAt: new Date(),
      },
    ]);

    const query = `
      UPDATE "order_tracking"
      SET 
        "tracking_status" = CASE
            WHEN jsonb_typeof("tracking_status") = 'array' 
                 AND jsonb_array_length("tracking_status") > 0 
                 AND ("tracking_status"->-1->>'orderStatusKey') = $3
            THEN "tracking_status"
            ELSE COALESCE("tracking_status", '[]'::jsonb) || $4::jsonb
        END,
        "updated_at" = CASE
            WHEN jsonb_typeof("tracking_status") = 'array' 
                 AND jsonb_array_length("tracking_status") > 0 
                 AND ("tracking_status"->-1->>'orderStatusKey') = $3
            THEN "updated_at"
            ELSE NOW()
        END
      WHERE "order_id" = $1 AND "customer_id" = $2
      RETURNING "order_tracking_id" as "orderTrackingId", "order_id" as "orderId", "customer_id" as "customerId", "tracking_status" as "trackingStatus", "created_at" as "createdAt", "updated_at" as "updatedAt"
    `;

    const result = await client.$queryRawUnsafe<any[]>(
      query,
      orderId,
      customerId,
      stepData.orderStatusKey,
      stepJson
    );

    if (!result || result.length === 0) 
      throw new NotFoundException('Order Tracking Status Not Found or unauthorized');

    return result[0];
  }
}
