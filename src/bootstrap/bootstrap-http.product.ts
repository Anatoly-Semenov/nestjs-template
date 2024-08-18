import express, { Express } from 'express';
import compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import '@sentry/tracing';

import { IBootstrapProduct } from '@project_name/shared/interfaces/bootstrap.interfaces';

export class BootstrapHttpProduct implements IBootstrapProduct {
  private setupCompression(expressInstance: Express) {
    expressInstance.use(compression());
  }

  async bootstrap(appModule: any): Promise<void> {
    const expressInstance = express();

    const app = await NestFactory.create(
      appModule,
      new ExpressAdapter(expressInstance),
    );

    this.setupCompression(expressInstance);

    app.useGlobalPipes(new ValidationPipe());
    app.enableVersioning({
      type: VersioningType.URI,
    });

    return app.listen(3000, '0.0.0.0');
  }
}
