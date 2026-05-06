import { Global, Module } from '@nestjs/common';
import { EmailService } from './email/email.service';
import { NotificationService } from './notification/notification.service';
import { SharedPrismaModule } from './prisma/shared-prisma.module';

@Global()
@Module({
  imports: [SharedPrismaModule],
  providers: [EmailService, NotificationService],
  exports: [EmailService, NotificationService, SharedPrismaModule],
})
export class SharedModule {}
