import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  CONFIG__SA_PASSWORD,
  CONFIG__SA_USERNAME,
} from '@project_name/shared/constants/config.constants';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private readonly configService: ConfigService) {}

  validateServiceToken(username: string, password: string) {
    const definedServiceAccountUsername =
      this.configService.get<string>(CONFIG__SA_USERNAME);
    const definedServiceAccountPassword =
      this.configService.get<string>(CONFIG__SA_PASSWORD);

    return (
      username === definedServiceAccountUsername &&
      password === definedServiceAccountPassword
    );
  }
}
