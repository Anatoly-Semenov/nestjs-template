import { T_RUN_MODE } from '@project_name/shared/types/bootstrap.types';

export interface IBootstrapFactory {
  make: (runMode: T_RUN_MODE) => IBootstrapProduct;
}

export interface IBootstrapProduct {
  bootstrap: (appModule: any) => Promise<void>;
}
