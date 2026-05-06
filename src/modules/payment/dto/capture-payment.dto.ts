import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class CapturePaymentDto {
  @IsString()
  orderId: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;
}
