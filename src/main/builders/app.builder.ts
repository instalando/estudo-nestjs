import 'module-alias/register';
import { NestFactory } from '@nestjs/core';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { INestApplication } from '@nestjs/common';
import { AppModule } from '@/main/modules/app.module';

import rawBody from 'fastify-raw-body';

export async function appBuilder(): Promise<INestApplication> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.register(rawBody, {
    field: 'rawBody',
    global: true,
    encoding: false,
    runFirst: true,
  });

  return app;
}
