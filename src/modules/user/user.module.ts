import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';
import { RoleService } from './services/role.service';
import { RoleRepository } from './repositories/role.repository';
import { AuditService } from './services/audit.service';
import { UserController } from './controllers/user.controller';
import { RoleController } from './controllers/role.controller';
import { USER_MODULE_API } from './interfaces/user-module.interface';
import { UserModuleFacade } from './facades/user-module.facade';

@Module({
  controllers: [UserController, RoleController],
  providers: [
    UserService,
    UserRepository,
    RoleService,
    RoleRepository,
    AuditService,
    {
      provide: USER_MODULE_API,
      useClass: UserModuleFacade,
    },
  ],
  exports: [UserService, RoleService, AuditService, USER_MODULE_API],
})
export class UserModule {}
