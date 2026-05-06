import { SetMetadata } from '@nestjs/common';
import { RoleKey } from '../../generated/prisma';

export const Roles = (...roles: RoleKey[]) => SetMetadata('roles', roles);
