import { Injectable } from '@nestjs/common';
import { IUserModuleApi } from '../interfaces/user-module.interface';
import { UserService } from '../services/user.service';
import { RoleKey, User, Prisma } from '../../../generated/prisma';

@Injectable()
export class UserModuleFacade implements IUserModuleApi {
  constructor(private readonly userService: UserService) {}

  async findUserByEmail<T = User>(email: string, select?: Prisma.UserSelect): Promise<T | null> {
    return this.userService.findUserByEmail<T>(email, select);
  }

  async findUserById<T = User>(userId: string, select?: Prisma.UserSelect): Promise<T | null> {
    return this.userService.findUserById<T>(userId, select);
  }

  async createUser(data: Prisma.UserCreateInput, tx?: Prisma.TransactionClient): Promise<User> {
    return this.userService.createUser(data, tx);
  }

  async updateUserById(userId: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.userService.updateUserById(userId, data);
  }

  async findAndUpdateUserByEmail(userId: string, email: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.userService.findAndUpdateUserByEmail(userId, email, data);
  }

  async assignRoleToUser(userId: string, roleKey: RoleKey, tx?: Prisma.TransactionClient): Promise<boolean> {
    return this.userService.assignRoleToUser(userId, roleKey, tx);
  }

  async findUserWithRestaurant(body: { userId: string; userRole: string }): Promise<any> {
    return this.userService.findUserWithRestaurant(body);
  }
}
