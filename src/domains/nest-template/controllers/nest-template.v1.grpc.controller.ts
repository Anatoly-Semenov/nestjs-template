import {
  Controller,
  Inject,
  Logger,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { GrpcData } from '@project_name/shared/decorators/grpc.decorator';
import { NestTemplateGrpcRequestDto } from '../dto/v1/nest-template.dto';
import { IOC__SERVICE__NEST_TEMPLATE } from '@project_name/shared/constants/ioc.constants';
import { INestTemplateService } from '@project_name/shared/interfaces/nest-template.interfaces';
import { CustomCacheKey } from '@project_name/shared/decorators/custom-cache-key.decorator';
import { GrpcAuthGuard } from '@project_name/common/auth/grpc-auth.guard';
import { GrpcCacheInterceptor } from '@project_name/common/cache/interceptors/grpc-cache/grpc-cache.interceptor';

@Controller()
@UseInterceptors(GrpcCacheInterceptor)
export class NestTemplateV1GrpcController {
  private readonly logger = new Logger(NestTemplateV1GrpcController.name);

  constructor(
    @Inject(IOC__SERVICE__NEST_TEMPLATE)
    private readonly templateService: INestTemplateService,
  ) {}

  @GrpcMethod('Hello')
  @UseGuards(GrpcAuthGuard)
  @CustomCacheKey({
    argumentIndex: 0,
    fieldName: 'name',
    uniquePrefix: 'nest-template-grpc',
  })
  async GetHello(@GrpcData() data: NestTemplateGrpcRequestDto) {
    this.logger.debug(`Получен запрос с Name ${data.name}`);

    return this.templateService.getHello(data.name);
  }
}
