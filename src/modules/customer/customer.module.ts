import { Module } from '@nestjs/common';
import { CustomerService } from './services/customer.service';
import { CustomerRepository } from './repositories/customer.repository';
import { CustomerController } from './controllers/customer.controller';
import { CUSTOMER_MODULE_API } from './interfaces/customer-module.interface';
import { CustomerModuleFacade } from './facades/customer-module.facade';

@Module({
  controllers: [CustomerController],
  providers: [
    CustomerService,
    CustomerRepository,
    {
      provide: CUSTOMER_MODULE_API,
      useClass: CustomerModuleFacade,
    },
  ],
  exports: [CustomerService, CUSTOMER_MODULE_API],
})
export class CustomerModule {}
