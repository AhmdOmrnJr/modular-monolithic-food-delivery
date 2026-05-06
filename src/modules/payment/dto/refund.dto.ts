import { IsString, IsNumber, Min } from 'class-validator';

export class RefundDto {
  @IsString()
  orderId: string;

  @IsNumber()
  @Min(0)
  amount: number;
}
