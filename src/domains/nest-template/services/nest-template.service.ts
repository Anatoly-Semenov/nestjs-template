import { Injectable } from '@nestjs/common';

import { INestTemplateService } from '@project_name/shared/interfaces/nest-template.interfaces';

@Injectable()
export class NestTemplateService implements INestTemplateService {
  constructor() {}

  getHello(name: string) {
    return `Hello ${name}!`;
  }
}
