import * as dotenv from 'dotenv';
import { User } from '../../modules/users/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

dotenv.config();

export const databaseConfig: PostgresConnectionOptions = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  synchronize: true,
  type: 'postgres',
  entities: [
    User
  ]
};