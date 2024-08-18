import { Module } from '@nestjs/common';
import { CacheModule as NestCacheModule } from '@nestjs/cache-manager';

import { interceptorsExport } from './interceptors/interceptors.export';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CONFIG__CACHE_BASE_TTL } from '@project_name/shared/constants/config.constants';

@Module({
  imports: [
    NestCacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        ttl: parseInt(configService.get<string>(CONFIG__CACHE_BASE_TTL), 10),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [...interceptorsExport],
  exports: [...interceptorsExport],
})
export class CacheModule {}
