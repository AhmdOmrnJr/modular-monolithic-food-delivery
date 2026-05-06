import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserTokenService } from './services/user-token.service';
import { UserTokenRepository } from './repositories/user-token.repository';
import { UserModule } from '../user/user.module';
import { CustomerModule } from '../customer/customer.module';

@Module({
  imports: [
    UserModule,
    CustomerModule,
    // JwtModule.registerAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => ({
    //     secret: configService.get<string>('JWT_SECRET') || 'default_secret',
    //     signOptions: { expiresIn: '1d' },
    //   }),
    // }),
    JwtModule.register({}),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserTokenService,
    UserTokenRepository,
  ],
  exports: [AuthService],
})
export class AuthModule {}
