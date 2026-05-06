import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';
import { RoleService } from './services/role.service';
import { RoleRepository } from './repositories/role.repository';
import { AuditService } from './services/audit.service';
import { UserController } from './controllers/user.controller';
import { RoleController } from './controllers/role.controller';

@Module({
  controllers: [UserController, RoleController],
  providers: [
    UserService,
    UserRepository,
    RoleService,
    RoleRepository,
    AuditService,
  ],
  exports: [UserService, RoleService, AuditService],
})
export class UserModule {}
