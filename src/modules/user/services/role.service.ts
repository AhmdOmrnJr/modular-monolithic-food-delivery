import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { RoleRepository } from '../repositories/role.repository';
import { RoleKey } from '../../../generated/prisma';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async createRole(data: { roleName: string; roleDesc?: string; roleKey: RoleKey }) {
    const existingRole = await this.roleRepository.findRoleByKey(data.roleKey);
    if (existingRole) {
      throw new ConflictException('Role with this key already exists');
    }
    return this.roleRepository.createRole(data);
  }

  async findAllRoles() {
    return this.roleRepository.findAll();
  }

  async findRoleByKey(roleKey: RoleKey) {
    return this.roleRepository.findRoleByKey(roleKey);
  }

  async removeRoleById(roleId: string) {
    const role = await this.roleRepository.findById(roleId);
    if (!role) {
      throw new NotFoundException(`Role '${roleId}' not found`);
    }

    try {
      return await this.roleRepository.removeRoleById(role.roleId);
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Role does not exist');
      } else {
        throw new InternalServerErrorException('Failed to remove role');
      }
    }
  }

  async removeRoleByName(roleKey: RoleKey) {
    const role = await this.roleRepository.findRoleByKey(roleKey);
    if (!role) {
      throw new InternalServerErrorException('Something went wrong!');
    }

    try {
      return await this.roleRepository.removeRoleByKey(role.roleKey as RoleKey);
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Role does not exist');
      } else {
        throw new InternalServerErrorException('Failed to remove role');
      }
    }
  }
}
