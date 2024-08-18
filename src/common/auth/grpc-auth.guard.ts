import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Metadata } from '@grpc/grpc-js';

import { GUARD__SERVICE_ACCOUNT_BASIC } from '@project_name/shared/constants/guard.constants';

@Injectable()
export class GrpcAuthGuard extends AuthGuard(GUARD__SERVICE_ACCOUNT_BASIC) {
  getRequest(context: ExecutionContext) {
    const metadata = context.getArgByIndex(1) as Metadata;

    return {
      headers: {
        authorization: metadata.get('authorization').at(0) ?? '',
      },
    };
  }
}
