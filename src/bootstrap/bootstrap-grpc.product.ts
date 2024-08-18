import { resolve } from 'path';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import '@sentry/tracing';

import { IBootstrapProduct } from '@project_name/shared/interfaces/bootstrap.interfaces';

export class BootstrapGrpcProduct implements IBootstrapProduct {
  async bootstrap(appModule: any): Promise<void> {
    const processRoot = process.cwd();
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      appModule,
      {
        transport: Transport.GRPC,
        options: {
          package: '.CHANGE_ME',
          protoPath: resolve(
            processRoot,
            'node_modules/.../CHANGE_ME',
          ),
          url: '0.0.0.0:3000',
          loader: {
            includeDirs: [
              resolve(processRoot, 'node_modules/...'),
            ],
            keepCase: true,
          },
        },
      },
    );

    return app.listen();
  }
}
