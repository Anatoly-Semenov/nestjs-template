import { IOC__INTERCEPTOR__GRPC_CACHE } from '@project_name/shared/constants/ioc.constants';
import { GrpcCacheInterceptor } from './grpc-cache.interceptor';

export const grpcCacheProvider = {
  provide: IOC__INTERCEPTOR__GRPC_CACHE,
  useClass: GrpcCacheInterceptor,
};
