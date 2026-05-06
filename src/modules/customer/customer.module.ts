import { Module } from '@nestjs/common';
import { CustomerService } from './services/customer.service';
import { CustomerRepository } from './repositories/customer.repository';
import { CustomerController } from './controllers/customer.controller';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository],
  exports: [CustomerService],
})
export class CustomerModule {}
