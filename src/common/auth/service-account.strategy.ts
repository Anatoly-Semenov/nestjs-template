import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';

import { AuthService } from './auth.service';
import { GUARD__SERVICE_ACCOUNT_BASIC } from '@project_name/shared/constants/guard.constants';

@Injectable()
export class ServiceAccountStrategy extends PassportStrategy(
  BasicStrategy,
  GUARD__SERVICE_ACCOUNT_BASIC,
) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const isValid = this.authService.validateServiceToken(username, password);

    if (!isValid) {
      throw new UnauthorizedException();
    }

    return {
      username,
      password,
    };
  }
}
