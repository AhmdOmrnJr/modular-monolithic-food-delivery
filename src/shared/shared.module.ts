import { Global, Module } from '@nestjs/common';
import { EmailService } from './email/email.service';
import { NotificationService } from './notification/notification.service';
import { SharedPrismaModule } from './prisma/shared-prisma.module';
import { AuditService } from './audit/audit.service';

@Global()
@Module({
  imports: [SharedPrismaModule],
  providers: [EmailService, NotificationService, AuditService],
  exports: [EmailService, NotificationService, AuditService, SharedPrismaModule],
})
export class SharedModule {}
