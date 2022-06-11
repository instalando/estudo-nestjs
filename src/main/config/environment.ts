import * as dotenv from 'dotenv';
dotenv.config();

export const database = {
  DB_CONNECTION: process.env.DB_CONNECTION,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: +process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
};
