import { NestTemplateV1Controller } from './nest-template.v1.controller';
import { NestTemplateV1GrpcController } from './nest-template.v1.grpc.controller';

export const ControllersExport = [
  NestTemplateV1Controller,
  NestTemplateV1GrpcController,
];
