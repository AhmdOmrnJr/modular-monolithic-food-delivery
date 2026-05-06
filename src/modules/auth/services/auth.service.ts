import { Injectable, BadRequestException, ConflictException, UnauthorizedException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../../../shared/email/email.service';
import { UserTokenService } from './user-token.service';
import { UserService } from '../../user/services/user.service';
import { CustomerService } from '../../customer/services/customer.service';
import { PasswordUtils } from '../utils/password.utils';
import { RoleKey, TokenType } from '../../../generated/prisma';
import ms from 'ms';
import { PrismaService } from '../../../shared/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly customerService: CustomerService,
    private readonly userTokenService: UserTokenService,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async signup(signupDto: any) {
    const { name, password, email, phone } = signupDto;

    const userCheck = await this.userService.findUserByEmail(email);
    if (userCheck) throw new ConflictException('Email already exists');

    const hashedPassword = await PasswordUtils.hash(password);

    await this.prisma.$transaction(async (tx) => {
      const newUser = await this.userService.createUser(
        {
          userName: name,
          userEmail: email,
          userPassword: hashedPassword,
        },
        tx
      );

      if (!newUser) throw new BadRequestException('Failed to Create User');

      const newCustomer = await this.customerService.createCustomer(
        {
          userId: newUser.userId,
          customerPhone: phone,
          createdById: newUser.userId,
          updatedById: newUser.userId,
        },
        tx
      );

      if (!newCustomer) throw new BadRequestException('Failed to Create Customer');

      await this.userService.assignRoleToUser(newUser.userId, 'CUSTOMER', tx);

      return { newUser };
    }).then(async ({ newUser }) => {
      const verificationLink = await this.generateVerificationToken(newUser.userId, newUser.userEmail);

      await this.emailService.sendVerificationEmail(
        newUser.userEmail,
        verificationLink,
        newUser.userName
      );
    });
  }

  async login(loginDto: any): Promise<any> {
    const { email, password } = loginDto;

    if (!email || !password) throw new BadRequestException('Email and password are required!');

    // UserService can fetch relations if needed, or we fetch them separately
    const user = await this.userService.findUserByEmail(email, {
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
    if (!(user as any).isActive) throw new UnauthorizedException('You do not have access to login to the system!');
    if (!(user as any).isConfirmed) throw new UnauthorizedException('You have not confirmed your email!');

    const match = await PasswordUtils.compare(password, (user as any).userPassword);
    if (!match) throw new UnauthorizedException('Invalid credentials!');

    let userRoleKeys: RoleKey[] = [];
    if ((user as any).roles && Array.isArray((user as any).roles)) {
      userRoleKeys = (user as any).roles as RoleKey[];
    }

    const tokenPayload: any = {
      userId: (user as any).userId,
      userName: (user as any).userName,
      userEmail: (user as any).userEmail,
      userRoles: userRoleKeys,
    };

    if ((user as any).isAdmin) {
      tokenPayload.isAdmin = true;
    }

    // Fetch customer/restaurant details
    const customer = await this.customerService.getCustomerByUserId((user as any).userId);
    if (customer) {
      tokenPayload.customerId = customer.customerId;
    }

    const userWithRestaurant = await this.userService.findUserWithRestaurant({ userId: (user as any).userId, userRole: 'RESTAURANT_MANAGER' });
    if (userWithRestaurant && (userWithRestaurant as any).restaurant) {
      tokenPayload.restaurantId = (userWithRestaurant as any).restaurant.restaurantId;
    }

    const accessTokenSecret = this.configService.get<string>('ACCESS_TOKEN_SECRET') || 'access_secret';
    const accessTokenExpiry = this.configService.get<number>('ACCESS_TOKEN_EXPIRY') || 2592000;
    
    const refreshTokenSecret = this.configService.get<string>('REFRESH_TOKEN_SECRET') || 'refresh_secret';
    const refreshTokenExpiry = this.configService.get<number>('REFRESH_TOKEN_EXPIRY') || 7776000;

    const accessToken = await this.jwtService.signAsync(tokenPayload, { secret: accessTokenSecret, expiresIn: accessTokenExpiry });
    const refreshToken = await this.jwtService.signAsync(tokenPayload, { secret: refreshTokenSecret, expiresIn: refreshTokenExpiry });

    await this.userTokenService.deleteRefreshTokensByUserId((user as any).userId);

    const now = new Date();
    // const expiryDays = parseInt(refreshTokenExpiry, 10);
    // const expiresAt = new Date(now.getTime() + expiryDays * 24 * 60 * 60 * 1000);
    const expiresAt = new Date(Date.now() + ms(refreshTokenExpiry));

    await this.userTokenService.createToken({
      userId: (user as any).userId,
      token: refreshToken,
      expiresAt: expiresAt,
      tokenType: TokenType.REFRESH,
    });

    const { userPassword, ...safeUser } = user as any;

    return {
      accessToken,
      refreshToken,
      user: safeUser,
    };
  }

  async me(userId: string): Promise<any> {
    const user = await this.userService.findUserById(userId, {
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

      const user = await this.userService.findUserByEmail(tokenData.userEmail, {
        isConfirmed: true,
        userEmail: true,
        userId: true,
      });
      
      if (!user) throw new BadRequestException('User not found!');
      if ((user as any).isConfirmed) throw new BadRequestException('User is already verified!');

      await this.userService.findAndUpdateUserByEmail((user as any).userId, (user as any).userEmail, {
        isConfirmed: true,
      });
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException('Failed to verify email!');
    }
  }

  async resendVerification(email: string): Promise<void> {
    const user = await this.userService.findUserByEmail(email);

    if (!user) return; // Prevent enumeration
    if ((user as any).isConfirmed) throw new BadRequestException('Email is already verified');

    const verificationLink = await this.generateVerificationToken((user as any).userId, (user as any).userEmail);

    await this.emailService.sendVerificationEmail((user as any).userEmail, verificationLink, (user as any).userName);
  }

  async refreshToken(token: string | null): Promise<any> {
    if (!token) {
      throw new UnauthorizedException('Invalid refresh token!');
    }

    try {
      const refreshTokenSecret = this.configService.get<string>('REFRESH_TOKEN_SECRET') || 'refresh_secret';
      const userData = this.jwtService.verify(token, { secret: refreshTokenSecret });

      const user = await this.userService.findUserById(userData.userId, {
        userId: true,
        userName: true,
        userEmail: true,
        userPassword: true,
        isActive: true,
        isAdmin: true,
        roles: true,
      });

      if (!user) throw new UnauthorizedException('User not found!');
      if (!(user as any).isActive) throw new UnauthorizedException('User is inactive!');

      const payload: any = {
        userId: (user as any).userId,
        userName: (user as any).userName,
        userEmail: (user as any).userEmail,
        userRoles: (user as any).roles || [], // RoleKey[]
      };

      if ((user as any).isAdmin) {
        payload.isAdmin = true;
      }

      // Fetch customer/restaurant details
      const customer = await this.customerService.getCustomerByUserId((user as any).userId);
      if (customer) {
        payload.customerId = customer.customerId;
      }

      const userWithRestaurant = await this.userService.findUserWithRestaurant({ userId: (user as any).userId, userRole: 'RESTAURANT_MANAGER' });
      if (userWithRestaurant && (userWithRestaurant as any).restaurant) {
        payload.restaurantId = (userWithRestaurant as any).restaurant.restaurantId;
      }

      const accessTokenSecret = this.configService.get<string>('ACCESS_TOKEN_SECRET') || 'access_secret';
      const accessTokenExpiry = this.configService.get<number>('ACCESS_TOKEN_EXPIRY') || 2592000;
      
      const accessToken = this.jwtService.sign(payload, { secret: accessTokenSecret, expiresIn: accessTokenExpiry });

      const { userPassword, ...safeUser } = user as any;

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
    const user = await this.userService.findUserByEmail(email);

    // Security: Always return success to prevent email enumeration
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Revoke any existing forgot password tokens for this user
    await this.userTokenService.revokeAllUserTokensByType((user as any).userId, TokenType.FORGOT_PASSWORD);

    const jwtSecret = this.configService.get<string>('JWT_SECRET') || 'default_secret';
    const token = this.jwtService.sign(
      {
        userId: (user as any).userId,
        userEmail: (user as any).userEmail,
      },
      { secret: jwtSecret, expiresIn: '1h' }
    );

    const now = new Date();
    const expiresAt = new Date(now.getTime() + 60 * 60 * 1000);

    await this.userTokenService.createToken({
      userId: (user as any).userId,
      token: token,
      tokenType: TokenType.FORGOT_PASSWORD,
      expiresAt: expiresAt,
    });

    const resetBaseUrl = this.configService.get<string>('PASSWORD_RESET_URL') || 'http://localhost:3000/reset-password';
    const resetLink = `${resetBaseUrl}?token=${token}`;

    await this.emailService.sendPasswordResetEmail((user as any).userEmail, {
      userName: (user as any).userName,
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

      await this.userService.updateUserById(tokenData.userId, { userPassword: hashedPassword });

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
