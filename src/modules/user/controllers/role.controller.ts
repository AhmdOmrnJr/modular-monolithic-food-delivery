import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { RoleService } from '../services/role.service';
import { AuthGuard } from '../../../shared/guards/auth.guard';
import { AdminGuard } from '../../../shared/guards/admin.guard';

@Controller('role')
@UseGuards(AuthGuard, AdminGuard)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('create')
  async createRole(@Body() body: any) {
    const { roleName, roleDesc, roleKey } = body;
    const role = await this.roleService.createRole({ roleName, roleDesc, roleKey });
    return { success: true, data: role, message: 'Role created successfully' };
  }

  @Get('all')
  async getAllRoles() {
    const roles = await this.roleService.findAllRoles();
    return { success: true, data: roles };
  }

  @Post('removeById')
  async removeRoleById(@Body('roleId') roleId: string) {
    const result = await this.roleService.removeRoleById(roleId);
    return { success: true, data: result, message: 'Role removed successfully' };
  }

  @Post('removeByName')
  async removeRoleByName(@Body('roleName') roleName: any) {
    const result = await this.roleService.removeRoleByName(roleName);
    return { success: true, data: result, message: 'Role removed successfully' };
  }
}
