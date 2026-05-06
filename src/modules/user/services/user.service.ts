import { Injectable, ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Prisma, User, RoleKey } from '../../../generated/prisma';
import { UserRepository } from '../repositories/user.repository';
import { RoleService } from './role.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly roleService: RoleService,
  ) {}

  async findUserWithRestaurant(body: { userId: string; userRole: string }) {
    return this.userRepository.findUserWithRestaurant(body.userId, body.userRole);
  }

  async createUser(data: Prisma.UserCreateInput, tx?: Prisma.TransactionClient) {
    return this.userRepository.createUser(data, tx);
  }

  async updateUserById(userId: string, data: Prisma.UserUpdateInput) {
    return this.userRepository.updateUserById(userId, data);
  }

  async updateIsActive(userId: string) {
    return this.userRepository.updateIsActive(userId);
  }

  async findAndUpdateUserByEmail(userId: string, email: string, data: Prisma.UserUpdateInput) {
    return this.userRepository.findAndUpdateUserByEmail(userId, email, data);
  }

  async findUserByEmail<T = User>(email: string, select?: Prisma.UserSelect) {
    return this.userRepository.findUserByEmail<T>(email, select);
  }

  async findUserById<T = User>(userId: string, select?: Prisma.UserSelect) {
    return this.userRepository.findUserById<T>(userId, select);
  }

  async assignRoleToUser(userId: string, roleKey: RoleKey, tx?: Prisma.TransactionClient) {
    const roleExists = await this.roleService.findRoleByKey(roleKey);
    if (!roleExists) throw new InternalServerErrorException('Role definition not found');

    const hasRole = await this.userRepository.hasRole(userId, roleKey, tx);
    if (hasRole) throw new ConflictException('User already has this role');

    await this.userRepository.assignRoleToUser(userId, roleKey, tx);
    return true;
  }

  async removeRoleFromUser(userId: string, roleKey: RoleKey, tx?: Prisma.TransactionClient) {
    const hasRole = await this.userRepository.hasRole(userId, roleKey, tx);
    if (!hasRole) throw new NotFoundException('User does not have this role');

    await this.userRepository.removeRoleFromUser(userId, roleKey, tx);
    return true;
  }
}
