import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GrpcData = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    return ctx.getArgByIndex(0);
  },
);

export const GrpcMetadata = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    return ctx.getArgByIndex(1);
  },
);

export const GrpcCall = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    return ctx.getArgByIndex(2);
  },
);
