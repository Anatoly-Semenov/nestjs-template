import { T_RUN_MODE } from '@project_name/shared/types/bootstrap.types';

import { BootstrapFactory } from './bootstrap/bootstrap.factory';
import { AppModule } from './app.module';

new BootstrapFactory()
  .make(process.env.RUN_MODE as T_RUN_MODE)
  .bootstrap(AppModule);
