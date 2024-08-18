import { NestTemplateService } from './nest-template.service';

import { IOC__SERVICE__NEST_TEMPLATE } from '@project_name/shared/constants/ioc.constants';

export const NestTemplateProvider = {
  provide: IOC__SERVICE__NEST_TEMPLATE,
  useClass: NestTemplateService,
};
