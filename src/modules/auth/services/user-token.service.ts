import { Injectable } from '@nestjs/common';
import { TokenType } from '../../../generated/prisma';
import { UserTokenRepository, CreateTokenData } from '../repositories/user-token.repository';

@Injectable()
export class UserTokenService {
  constructor(private readonly userTokenRepository: UserTokenRepository) {}

  createToken(data: CreateTokenData) {
    return this.userTokenRepository.createToken(data);
  }

  findValidToken(token: string, tokenType: TokenType) {
    return this.userTokenRepository.findValidToken(token, tokenType);
  }

  async findTokenByToken(token: string) {
    return this.userTokenRepository.findTokenByToken(token);
  }

  async revokeToken(userId: string, token: string) {
    return this.userTokenRepository.revokeToken(userId, token);
  }

  async revokeAllUserTokensByType(userId: string, tokenType: TokenType) {
    return this.userTokenRepository.revokeAllUserTokensByType(userId, tokenType);
  }

  async revokeAllUserTokens(userId: string) {
    return this.userTokenRepository.revokeAllUserTokens(userId);
  }

  async isValid(token: string, tokenType?: TokenType): Promise<boolean> {
    return this.userTokenRepository.isValid(token, tokenType);
  }

  async deleteRefreshTokensByUserId(userId: string) {
    return this.userTokenRepository.deleteRefreshTokensByUserId(userId);
  }
}
