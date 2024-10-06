import { ConfigService } from '@nestjs/config';
import dotenv from 'dotenv';
import path from 'path';
import { DataSource } from 'typeorm';

const mode = process.env.NODE_ENV ?? 'dev';

dotenv.config({ path: mode ? `.env.${mode}` : '.env' });

const config = new ConfigService();

export const dataSource: DataSource = new DataSource({
  logging: true,
  type: config.get<any>('DB_TYPE', 'postgres'),
  host: config.get<string>('DB_HOST', 'localhost'),
  port: config.get<number>('DB_PORT', 5432),
  username: config.get<string>('DB_USERNAME', 'postgres'),
  password: config.get<string>('DB_PASSWORD', 'postgres'),
  database: config.get<string>('DB_DATABASE', 'erp'),
  schema: config.get<string>('DB_SCHEMA', 'public'),
  entities: [path.join(__dirname, '..', 'entities/postgres/*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '..', 'migrations/**/*{.ts,.js}')],
});
