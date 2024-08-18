import { Module } from '@nestjs/common';

import { ProvidersExport } from './providers/providers.export';

@Module({
  imports: [...ProvidersExport],
  controllers: [],
  providers: [],
})
export class AppModule {}
