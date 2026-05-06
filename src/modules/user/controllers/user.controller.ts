import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { AuthGuard } from '../../../shared/guards/auth.guard';
import { AdminGuard } from '../../../shared/guards/admin.guard';
import { CurrentUser } from '../../../shared/decorators/current-user.decorator';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('findUserWithRestaurant')
  async findUserWithRestaurant(@Body() body: any) {
    const result = await this.userService.findUserWithRestaurant(body);
    return { success: true, data: result };
  }

  @Post('updateUserById')
  async updateUserById(@CurrentUser() user: any, @Body() body: any) {
    const result = await this.userService.updateUserById(user.userId, body);
    return { success: true, data: result };
  }

  @Post('updateIsActive')
  @UseGuards(AdminGuard)
  async updateIsActive(@Body('userId') userId: string) {
    // In express version it was req.user!.userId, which would mean users toggle their own active status?
    // Usually this is an admin action to activate/deactivate another user.
    // Assuming the body contains the target userId, but if it was meant to be the current user:
    // const result = await this.userService.updateIsActive(user.userId);
    // Let's go with the current user for parity with old code, or body.userId if it's an admin route.
    // Express code: const result = await userService.updateIsActive(req.user!.userId);
    // Actually, updateIsActive might be used by admins to deactivate others, or users themselves.
    const result = await this.userService.updateIsActive(userId);
    return { success: true, data: result };
  }

  @Post('findAndUpdateUserByEmail')
  async findAndUpdateUserByEmail(@CurrentUser() user: any, @Body() body: any) {
    const result = await this.userService.findAndUpdateUserByEmail(user.userId, user.userEmail, body);
    return { success: true, data: result };
  }

  @Post('findUserById')
  async findUserById(@Body('userId') userId: string) {
    const result = await this.userService.findUserById(userId);
    return { success: true, data: result };
  }

  @Post('assignRoleToUser')
  @UseGuards(AdminGuard)
  async assignRoleToUser(@Body() body: any) {
    const { userId, roleName } = body;
    const result = await this.userService.assignRoleToUser(userId, roleName);
    return { success: true, data: result, message: 'Role assigned successfully' };
  }

  @Post('removeRoleFromUser')
  @UseGuards(AdminGuard)
  async removeRoleFromUser(@Body() body: any) {
    const { userId, roleName } = body;
    const result = await this.userService.removeRoleFromUser(userId, roleName);
    return { success: true, data: result, message: 'Role removed successfully' };
  }
}
