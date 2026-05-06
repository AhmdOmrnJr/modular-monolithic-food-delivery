import { IsString, IsNumber, IsOptional, IsDate, IsEmail, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class ProcessPaymentDto {
  @IsString()
  customerId: string;

  @IsString()
  orderId: string;

  @IsNumber()
  @Min(0)
  amount: number;

  @IsEmail()
  customerEmail: string;

  @IsString()
  restaurantId: string;

  @IsDate()
  @Type(() => Date)
  requestTimestamp: Date;

  @IsOptional()
  @IsString()
  paymentProvider?: string;

  @IsOptional()
  @IsString()
  paymentMethodId?: string;
}
