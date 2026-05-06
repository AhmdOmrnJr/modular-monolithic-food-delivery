import { Controller, Post, Body, Get, Req, Res, UseGuards, Query, BadRequestException } from '@nestjs/common';
import type { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../../../shared/guards/auth.guard';
import { CurrentUser } from '../../../shared/decorators/current-user.decorator';
import { UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from '../../../shared/pipes/joi-validation.pipe';
import { signUpSchema, logInSchema, forgetPasswordSchema, resetPasswordSchema, confirmEmailSchema, requireEmailSchema } from '../dto/auth.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Register a new user' })
  @UsePipes(new JoiValidationPipe(signUpSchema))
  async signup(@Body() signupDto: any) {
    await this.authService.signup(signupDto);
    return {
      success: true,
      message: 'Signup successful. Please verify your email.',
    };
  }

  @Post('login')
  @ApiOperation({ summary: 'Login and get access token' })
  @UsePipes(new JoiValidationPipe(logInSchema))
  async login(@Body() loginDto: any, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refreshToken, user } = await this.authService.login(loginDto);

    res.cookie('refresh_token', refreshToken, {
      maxAge: 60 * 60 * 24 * 90 * 1000, // 90 days in ms
      httpOnly: true,
    });

    return {
      success: true,
      data: {
        accessToken,
        user,
      },
    };
  }

  @Get('me')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user profile' })
  @UseGuards(AuthGuard)
  async me(@CurrentUser() user: any) {
    const userId = user.userId;
    const userData = await this.authService.me(userId);
    return { success: true, data: userData };
  }

  @Get('verify-email')
  @ApiOperation({ summary: 'Verify user email with token' })
  async verifyEmail(@Query(new JoiValidationPipe(confirmEmailSchema)) query: any) {
    await this.authService.verifyEmail(query.token);
    return {
      success: true,
      message: 'Email verified successfully! You can now login to your account.',
    };
  }

  @Post('resend-verification')
  @ApiOperation({ summary: 'Resend verification email' })
  @UsePipes(new JoiValidationPipe(requireEmailSchema))
  async resendVerification(@Body() body: any) {
    await this.authService.resendVerification(body.email);
    return {
      success: true,
      message: 'If you have this email registered, a new verification email will be sent.',
    };
  }

  @Post('refresh-token')
  @ApiOperation({ summary: 'Refresh access token using cookie' })
  async refreshToken(@Req() req: Request) {
    const refreshToken = req.cookies?.refresh_token;

    const { accessToken, user } = await this.authService.refreshToken(refreshToken);
    return {
      success: true,
      message: 'Access token refreshed successfully.',
      data: { accessToken, user },
    };
  }

  @Post('logout')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Logout from current session' })
  @UseGuards(AuthGuard)
  async logout(@CurrentUser() user: any, @Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.cookies?.refresh_token;

    await this.authService.logout(user.userId, refreshToken);
    res.clearCookie('refresh_token');

    return { success: true, message: 'Logged out successfully' };
  }

  @Post('logout-all')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Logout from all sessions' })
  @UseGuards(AuthGuard)
  async logoutAll(@CurrentUser() user: any, @Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.cookies?.refresh_token;

    await this.authService.logoutAll(user.userId, refreshToken);
    res.clearCookie('refresh_token');

    return { success: true, message: 'Logged out from all sessions successfully.' };
  }

  @Post('forgot-password')
  @ApiOperation({ summary: 'Request password reset' })
  @UsePipes(new JoiValidationPipe(forgetPasswordSchema))
  async forgetPassword(@Body() body: any) {
    await this.authService.forgetPassword(body.email);
    return {
      success: true,
      message: 'If an account with that email exists, a password reset link has been sent.',
    };
  }

  @Post('reset-password')
  @ApiOperation({ summary: 'Reset password with token' })
  @UsePipes(new JoiValidationPipe(resetPasswordSchema))
  async resetPassword(@Body() body: any) {
    await this.authService.resetPassword(body.token, body.newPassword);
    return {
      success: true,
      message: 'Password has been reset successfully. Please login with your new password.',
    };
  }
}
