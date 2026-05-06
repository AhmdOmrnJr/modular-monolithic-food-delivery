import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, User, RoleKey } from '../../../generated/prisma';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { RoleQueries } from '../../../shared/prisma/queries/role.queries';

@Injectable()
export class UserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly roleQueries: RoleQueries,
  ) {}

  async createUser(data: Prisma.UserCreateInput, tx?: Prisma.TransactionClient) {
    return (tx || this.prisma).user.create({ data });
  }

  async assignRoleToUser(userId: string, roleKey: RoleKey, tx?: Prisma.TransactionClient) {
    return this.roleQueries.add(userId, roleKey, tx);
  }

  async removeRoleFromUser(userId: string, roleKey: RoleKey, tx?: Prisma.TransactionClient) {
    return this.roleQueries.remove(userId, roleKey, tx);
  }

  async hasRole(userId: string, roleKey: RoleKey, tx?: Prisma.TransactionClient) {
    return this.roleQueries.has(userId, roleKey, tx);
  }

  async findUserByEmail<T = User>(email: string, select?: Prisma.UserSelect): Promise<T> {
    const q: Prisma.UserFindUniqueArgs = {
      where: { userEmail: email },
    };

    if (select && Object.keys(select).length > 0) {
      q.select = select;
    }

    return (await this.prisma.user.findUnique(q)) as T;
  }

  async findUserById<T = User>(userId: string, select?: Prisma.UserSelect): Promise<T> {
    const q: Prisma.UserFindUniqueArgs = {
      where: { userId },
    };

    if (select && Object.keys(select).length > 0) {
      q.select = select;
    }

    return (await this.prisma.user.findUnique(q)) as T;
  }

  async updateUserById(userId: string, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { userId },
      data,
    });
  }

  async updateIsActive(userId: string) {
    const user = await this.findUserById(userId, { isActive: true });

    if (!user) throw new NotFoundException('User not found');

    return this.prisma.user.update({
      where: { userId },
      data: { isActive: !(user as any).isActive },
      select: {
        userId: true,
        userName: true,
        userEmail: true,
        isActive: true,
      },
    });
  }

  async findUserWithRestaurant(userId: string, userRole: string) {
    return this.prisma.user.findUnique({
      where: { userId },
      include: {
        restaurant: userRole === 'RESTAURANT_MANAGER' ? true : false,
      },
    });
  }

  async findAndUpdateUserByEmail(userId: string, email: string, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { userId, userEmail: email },
      data,
    });
  }
}
