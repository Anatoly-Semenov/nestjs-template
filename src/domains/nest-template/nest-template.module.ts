import { Module } from '@nestjs/common';
import { ObservabilityModule } from '@project_name/common/observability/observability.module';

import { ServicesExport } from './services/services.export';
import { ControllersExport } from './controllers/controllers.export';

@Module({
  imports: [ObservabilityModule],
  controllers: [...ControllersExport],
  providers: [...ServicesExport],
})
export class NestTemplateModule {}
