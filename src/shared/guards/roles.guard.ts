import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RoleKey } from '../../generated/prisma';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<RoleKey[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    
    if (!requiredRoles) {
      return true; // No roles required, allow access
    }

    const { user } = context.switchToHttp().getRequest();
    const userRoles: RoleKey[] = user?.userRoles || [];

    const hasPermission = userRoles.some((role) => requiredRoles.includes(role));
    
    if (!hasPermission) {
        throw new ForbiddenException('You are not authorized to perform this action!');
    }
    
    return true;
  }
}
