import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { TokenType } from '../../../generated/prisma';
import { uuidv7 } from 'uuidv7';
import * as crypto from 'crypto';

export interface CreateTokenData {
  userId: string;
  token?: string;
  tokenType: TokenType;
  expiresAt: Date;
}

@Injectable()
export class UserTokenRepository {
  constructor(private readonly prisma: PrismaService) {}

  // Generate a cryptographically secure random token
  // private generateSecureToken(): string {
  //   return crypto.randomBytes(32).toString('hex');
  // }

  // Create a new token for a user
  async createToken(data: CreateTokenData) {
    const token = data.token
    if (!token) throw new BadRequestException('Token is required!');
     /* || this.generateSecureToken(); */

    return this.prisma.userToken.create({
      data: {
        userTokenId: uuidv7(),
        userId: data.userId,
        token,
        tokenType: data.tokenType,
        expiresAt: data.expiresAt,
      },
    });
  }

  // Find a valid token by token string and type
  async findValidToken(token: string, tokenType: TokenType) {
    const now = new Date();

    return this.prisma.userToken.findFirst({
      where: {
        token,
        tokenType,
        expiresAt: { gte: now },
      },
    });
  }

  // Find any token by token string (regardless of validity)
  async findTokenByToken(token: string) {
    return this.prisma.userToken.findFirst({
      where: { token },
    });
  }

  // Revoke a specific token
  async revokeToken(userId: string, token: string) {
    return this.prisma.userToken.delete({
      where: { token },
    });
  }

  // Revoke all tokens of a specific type for a user
  async revokeAllUserTokensByType(userId: string, tokenType: TokenType) {
    return this.prisma.userToken.deleteMany({
      where: {
        userId,
        tokenType,
      },
    });
  }

  // Revoke all tokens for a user (all types)
  async revokeAllUserTokens(userId: string) {
    return this.prisma.userToken.deleteMany({
      where: {
        userId,
      },
    });
  }

  // Check if a token is valid
  async isValid(token: string, tokenType?: TokenType): Promise<boolean> {
    const where: any = { token };
    if (tokenType) {
      where.tokenType = tokenType;
    }

    const tokenData = await this.prisma.userToken.findFirst({ where });

    if (!tokenData) return false;
    if (tokenData.expiresAt < new Date()) return false;

    return true;
  }

  async deleteRefreshTokensByUserId(userId: string) {
    return this.prisma.userToken.deleteMany({
      where: {
        userId,
        tokenType: TokenType.REFRESH,
      },
    });
  }
}
