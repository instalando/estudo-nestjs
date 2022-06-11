import { database } from './environment';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: database.DB_HOST,
  port: database.DB_PORT,
  username: database.DB_USERNAME,
  password: database.DB_PASSWORD,
  database: database.DB_DATABASE,
};
