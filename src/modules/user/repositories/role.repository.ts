import { Injectable } from '@nestjs/common';
import { Prisma, RoleKey } from '../../../generated/prisma';
import { PrismaService } from '../../../shared/prisma/prisma.service';

@Injectable()
export class RoleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createRole(data: { roleName: string; roleDesc?: string; roleKey: any }) {
    return this.prisma.role.create({
      data: {
        roleName: data.roleName,
        roleDesc: data.roleDesc ?? null,
        roleKey: data.roleKey,
      },
    });
  }

  async findRoleByKey(roleKey: RoleKey) {
    return this.prisma.role.findFirst({
      where: {
        roleKey,
      },
    });
  }

  async findById(roleId: string) {
    return this.prisma.role.findUnique({
      where: { roleId },
    });
  }

  async findAll() {
    return this.prisma.role.findMany();
  }

  async removeRoleById(roleId: string) {
    return this.prisma.role.delete({
      where: { roleId },
    });
  }

  async removeRoleByKey(roleKey: RoleKey) {
    return this.prisma.role.deleteMany({
      where: { roleKey },
    });
  }
}
