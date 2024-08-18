import {
  Controller,
  Get,
  Inject,
  Logger,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { ROUTER__VERSION_1 } from '@project_name/shared/constants/router.constants';
import { IOC__SERVICE__NEST_TEMPLATE } from '@project_name/shared/constants/ioc.constants';
import { INestTemplateService } from '@project_name/shared/interfaces/nest-template.interfaces';
import { NestTemplateRequestDto } from '../dto/v1/nest-template.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { AuthGuard } from '@nestjs/passport';
import { GUARD__SERVICE_ACCOUNT_BASIC } from '@project_name/shared/constants/guard.constants';

@Controller({
  path: 'hello',
  version: ROUTER__VERSION_1,
})
@UseInterceptors(CacheInterceptor)
export class NestTemplateV1Controller {
  private readonly logger = new Logger(NestTemplateV1Controller.name);

  constructor(
    @Inject(IOC__SERVICE__NEST_TEMPLATE)
    private readonly templateService: INestTemplateService,
  ) {}

  @UseGuards(AuthGuard(GUARD__SERVICE_ACCOUNT_BASIC))
  @Get(':name')
  async getHello(@Param() params: NestTemplateRequestDto) {
    this.logger.debug(`[NestTemplate] Получен запрос c Name ${params.name}`);

    return this.templateService.getHello(params.name);
  }
}
