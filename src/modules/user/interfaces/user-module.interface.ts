import { User, RoleKey, Prisma } from '../../../generated/prisma';

export interface IUserModuleApi {
  findUserByEmail<T = User>(email: string, select?: Prisma.UserSelect): Promise<T | null>;
  findUserById<T = User>(userId: string, select?: Prisma.UserSelect): Promise<T | null>;
  createUser(data: Prisma.UserCreateInput, tx?: Prisma.TransactionClient): Promise<User>;
  updateUserById(userId: string, data: Prisma.UserUpdateInput): Promise<User>;
  findAndUpdateUserByEmail(userId: string, email: string, data: Prisma.UserUpdateInput): Promise<User>;
  assignRoleToUser(userId: string, roleKey: RoleKey, tx?: Prisma.TransactionClient): Promise<boolean>;
  findUserWithRestaurant(body: { userId: string; userRole: string }): Promise<any>;
}

export const USER_MODULE_API = Symbol('USER_MODULE_API');
