import {
  IBootstrapFactory,
  IBootstrapProduct,
} from '@project_name/shared/interfaces/bootstrap.interfaces';
import { T_RUN_MODE } from '@project_name/shared/types/bootstrap.types';
import { BootstrapHttpProduct } from './bootstrap-http.product';
import { BootstrapGrpcProduct } from './bootstrap-grpc.product';

export class BootstrapFactory implements IBootstrapFactory {
  make(runMode: T_RUN_MODE): IBootstrapProduct {
    console.log('Bootstrapping Nest Application...');

    switch (runMode) {
      case 'MODE_GRPC':
        return new BootstrapGrpcProduct();
      case 'MODE_HTTP':
      default:
        return new BootstrapHttpProduct();
    }
  }
}
