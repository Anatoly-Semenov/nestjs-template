import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

import { GrpcAuthGuard } from '@project_name/common/auth/grpc-auth.guard';
import { AuthService } from './auth.service';
import { ServiceAccountStrategy } from './service-account.strategy';

@Module({
  imports: [ConfigModule, PassportModule],
  providers: [
    AuthService,
    ConfigService,
    ServiceAccountStrategy,
    GrpcAuthGuard,
  ],
})
export class AuthModule {}
