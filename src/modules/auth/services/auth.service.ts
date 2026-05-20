import { Injectable, BadRequestException, ConflictException, UnauthorizedException, InternalServerErrorException, NotFoundException, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../../../shared/email/email.service';
import { UserTokenService } from './user-token.service';
import { USER_MODULE_API } from '../../user/interfaces/user-module.interface';
import type { IUserModuleApi } from '../../user/interfaces/user-module.interface';
import { CUSTOMER_MODULE_API } from '../../customer/interfaces/customer-module.interface';
import type { ICustomerModuleApi } from '../../customer/interfaces/customer-module.interface';
import { PasswordUtils } from '../utils/password.utils';
import { RoleKey, TokenType, User } from '../../../generated/prisma';
import ms from 'ms';
import { PrismaService } from '../../../shared/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(USER_MODULE_API) private readonly userApi: IUserModuleApi,
    @Inject(CUSTOMER_MODULE_API) private readonly customerApi: ICustomerModuleApi,
    private readonly userTokenService: UserTokenService,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async signup(signupDto: any) {
    const { name, password, email, phone } = signupDto;

    const userCheck = await this.userApi.findUserByEmail(email);
    if (userCheck) throw new ConflictException('Email already exists');

    const hashedPassword = await PasswordUtils.hash(password);

    const { newUser } = await this.prisma.$transaction(async (tx) => {
      const newUser = await this.userApi.createUser(
        {
          userName: name,
          userEmail: email,
          userPassword: hashedPassword,
        },
        tx
      );

      if (!newUser) throw new BadRequestException('Failed to Create User');

      const newCustomer = await this.customerApi.createCustomer(
        {
          userId: newUser.userId,
          customerPhone: phone,
          createdById: newUser.userId,
          updatedById: newUser.userId,
        },
        tx
      );

      if (!newCustomer) throw new BadRequestException('Failed to Create Customer');

      await this.userApi.assignRoleToUser(newUser.userId, 'CUSTOMER', tx);

      return { newUser };
    });

    // True fire and forget email sending (with .catch() for process safety)
    this.sendVerificationEmailAsync({
      userId: newUser.userId,
      userEmail: newUser.userEmail,
      userName: newUser.userName,
    }).catch((err) => {
      console.error('[Auth] Failed to send verification email asynchronously:', err);
    });

    return { newUser };
  }

  private async sendVerificationEmailAsync(user: { userId: string; userEmail: string; userName: string }): Promise<void> {
    const verificationLink = await this.generateVerificationToken(user.userId, user.userEmail);
    await this.emailService.sendVerificationEmail(user.userEmail, verificationLink, user.userName);
  }

  async login(loginDto: any): Promise<any> {
    const { email, password } = loginDto;

    if (!email || !password) throw new BadRequestException('Email and password are required!');

    const user = await this.userApi.findUserByEmail<User & { roles?: RoleKey[] }>(email, {
      userId: true,
      userName: true,
      userEmail: true,
      userPassword: true,
      isActive: true,
      isConfirmed: true,
      isAdmin: true,
      roles: true,
    });

    if (!user) throw new UnauthorizedException('Invalid credentials!');
    if (!user.isActive) throw new UnauthorizedException('You do not have access to login to the system!');
    if (!user.isConfirmed) throw new UnauthorizedException('You have not confirmed your email!');

    const match = await PasswordUtils.compare(password, user.userPassword);
    if (!match) throw new UnauthorizedException('Invalid credentials!');

    let userRoleKeys: RoleKey[] = [];
    if (user.roles && Array.isArray(user.roles)) {
      userRoleKeys = user.roles;
    }

    const tokenPayload: any = {
      userId: user.userId,
      userName: user.userName,
      userEmail: user.userEmail,
      userRoles: userRoleKeys,
    };

    if (user.isAdmin) {
      tokenPayload.isAdmin = true;
    }

    // Fetch customer details via the Customer Port (API)
    const customer = await this.customerApi.getCustomerByUserId(user.userId);
    if (customer) {
      tokenPayload.customerId = customer.customerId;
    }

    // Fetch restaurant manager details via the User Port (API)
    const userWithRestaurant = await this.userApi.findUserWithRestaurant({ userId: user.userId, userRole: 'RESTAURANT_MANAGER' });
    if (userWithRestaurant && userWithRestaurant.restaurant) {
      tokenPayload.restaurantId = userWithRestaurant.restaurant.restaurantId;
    }

    const accessTokenSecret = this.configService.get<string>('ACCESS_TOKEN_SECRET') || 'access_secret';
    const accessTokenExpiry = this.configService.get<number>('ACCESS_TOKEN_EXPIRY') || 2592000;
    
    const refreshTokenSecret = this.configService.get<string>('REFRESH_TOKEN_SECRET') || 'refresh_secret';
    const refreshTokenExpiry = this.configService.get<number>('REFRESH_TOKEN_EXPIRY') || 7776000;

    const accessToken = await this.jwtService.signAsync(tokenPayload, { secret: accessTokenSecret, expiresIn: accessTokenExpiry });
    const refreshToken = await this.jwtService.signAsync(tokenPayload, { secret: refreshTokenSecret, expiresIn: refreshTokenExpiry });

    await this.userTokenService.deleteRefreshTokensByUserId(user.userId);

    const expiresAt = new Date(Date.now() + ms(refreshTokenExpiry));

    await this.userTokenService.createToken({
      userId: user.userId,
      token: refreshToken,
      expiresAt: expiresAt,
      tokenType: TokenType.REFRESH,
    });

    const { userPassword, ...safeUser } = user;

    return {
      accessToken,
      refreshToken,
      user: safeUser,
    };
  }

  async me(userId: string): Promise<any> {
    const user = await this.userApi.findUserById(userId, {
      userId: true,
      userName: true,
      userEmail: true,
      isActive: true,
      isConfirmed: true,
      isAdmin: true,
      roles: true,
      createdAt: true,
      updatedAt: true,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async verifyEmail(token: string): Promise<void> {
    try {
      const jwtSecret = this.configService.get<string>('JWT_SECRET') || 'default_secret';
      const tokenData = this.jwtService.verify<{ userId: string; userEmail: string }>(token, { secret: jwtSecret });

      const user = await this.userApi.findUserByEmail(tokenData.userEmail, {
        isConfirmed: true,
        userEmail: true,
        userId: true,
      });
      
      if (!user) throw new BadRequestException('User not found!');
      if (user.isConfirmed) throw new BadRequestException('User is already verified!');

      await this.userApi.findAndUpdateUserByEmail(user.userId, user.userEmail, {
        isConfirmed: true,
      });
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException('Failed to verify email!');
    }
  }

  async resendVerification(email: string): Promise<void> {
    const user = await this.userApi.findUserByEmail(email);

    if (!user) return; // Prevent enumeration
    if (user.isConfirmed) throw new BadRequestException('Email is already verified');

    // True fire and forget
    this.sendVerificationEmailAsync({
      userId: user.userId,
      userEmail: user.userEmail,
      userName: user.userName,
    }).catch((err) => {
      console.error('[Auth] Failed to send resend-verification email asynchronously:', err);
    });
  }

  async refreshToken(token: string | null): Promise<any> {
    if (!token) {
      throw new UnauthorizedException('Invalid refresh token!');
    }

    try {
      const refreshTokenSecret = this.configService.get<string>('REFRESH_TOKEN_SECRET') || 'refresh_secret';
      const userData = this.jwtService.verify(token, { secret: refreshTokenSecret });

      const user = await this.userApi.findUserById<User & { roles?: RoleKey[] }>(userData.userId, {
        userId: true,
        userName: true,
        userEmail: true,
        userPassword: true,
        isActive: true,
        isAdmin: true,
        roles: true,
      });

      if (!user) throw new UnauthorizedException('User not found!');
      if (!user.isActive) throw new UnauthorizedException('User is inactive!');

      const payload: any = {
        userId: user.userId,
        userName: user.userName,
        userEmail: user.userEmail,
        userRoles: user.roles || [], // RoleKey[]
      };

      if (user.isAdmin) {
        payload.isAdmin = true;
      }

      // Fetch customer details via the Customer Port (API)
      const customer = await this.customerApi.getCustomerByUserId(user.userId);
      if (customer) {
        payload.customerId = customer.customerId;
      }

      const userWithRestaurant = await this.userApi.findUserWithRestaurant({ userId: user.userId, userRole: 'RESTAURANT_MANAGER' });
      if (userWithRestaurant && userWithRestaurant.restaurant) {
        payload.restaurantId = userWithRestaurant.restaurant.restaurantId;
      }

      const accessTokenSecret = this.configService.get<string>('ACCESS_TOKEN_SECRET') || 'access_secret';
      const accessTokenExpiry = this.configService.get<number>('ACCESS_TOKEN_EXPIRY') || 2592000;
      
      const accessToken = this.jwtService.sign(payload, { secret: accessTokenSecret, expiresIn: accessTokenExpiry });

      const { userPassword, ...safeUser } = user;

      return {
        accessToken,
        user: safeUser,
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token!');
    }
  }

  async logout(userId: string, refreshToken?: string) {
    if (!refreshToken) {
      throw new UnauthorizedException();
    }
    await this.userTokenService.revokeToken(userId, refreshToken);
  }

  async logoutAll(userId: string, refreshToken?: string) {
    if (!refreshToken) throw new UnauthorizedException();
    await this.userTokenService.revokeAllUserTokens(userId);
  }

  async forgetPassword(email: string): Promise<void> {
    const user = await this.userApi.findUserByEmail(email);

    // Security: Always return success to prevent email enumeration
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Revoke any existing forgot password tokens for this user
    await this.userTokenService.revokeAllUserTokensByType(user.userId, TokenType.FORGOT_PASSWORD);

    const jwtSecret = this.configService.get<string>('JWT_SECRET') || 'default_secret';
    const token = this.jwtService.sign(
      {
        userId: user.userId,
        userEmail: user.userEmail,
      },
      { secret: jwtSecret, expiresIn: '1h' }
    );

    const now = new Date();
    const expiresAt = new Date(now.getTime() + 60 * 60 * 1000);

    await this.userTokenService.createToken({
      userId: user.userId,
      token: token,
      tokenType: TokenType.FORGOT_PASSWORD,
      expiresAt: expiresAt,
    });

    const resetBaseUrl = this.configService.get<string>('PASSWORD_RESET_URL') || 'http://localhost:3000/reset-password';
    const resetLink = `${resetBaseUrl}?token=${token}`;

    // True fire and forget
    this.sendForgotPasswordEmailAsync({ userEmail: user.userEmail, userName: user.userName }, resetLink).catch((err) => {
      console.error('[Auth] Failed to send password reset email asynchronously:', err);
    });
  }

  private async sendForgotPasswordEmailAsync(user: { userEmail: string; userName: string }, resetLink: string): Promise<void> {
    await this.emailService.sendPasswordResetEmail(user.userEmail, {
      userName: user.userName,
      resetLink,
      expiryHours: 1,
    });
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    try {
      const jwtSecret = this.configService.get<string>('JWT_SECRET') || 'default_secret';
      const decoded = this.jwtService.verify(token, { secret: jwtSecret });
      
      if (!decoded || typeof decoded === 'string' || !decoded.userId) {
        throw new BadRequestException('Invalid or expired reset token');
      }

      const tokenData = await this.userTokenService.findValidToken(token, TokenType.FORGOT_PASSWORD);

      if (!tokenData) {
        throw new BadRequestException('Invalid or expired reset token');
      }

      const hashedPassword = await PasswordUtils.hash(newPassword);

      await this.userApi.updateUserById(tokenData.userId, { userPassword: hashedPassword });

      await this.userTokenService.revokeToken(tokenData.userId, token);

      // Security: Revoke all refresh tokens (logout from all devices)
      await this.userTokenService.revokeAllUserTokensByType(tokenData.userId, TokenType.REFRESH);
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new BadRequestException('Invalid or expired reset token');
    }
  }

  async generateVerificationToken(userId: string, email: string): Promise<string> {
    const jwtSecret = this.configService.get<string>('JWT_SECRET') || 'default_secret';
    const token = await this.jwtService.signAsync(
      {
        userId,
        userEmail: email,
      },
      { secret: jwtSecret, expiresIn: '1d' }
    );

    const verifyBaseUrl = this.configService.get<string>('EMAIL_VERIFICATION_URL') || 'http://localhost:3000/verify-email';
    const verificationLink = `${verifyBaseUrl}?token=${token}`;

    console.log('verificationLink', verificationLink);

    return verificationLink;
  }
}
