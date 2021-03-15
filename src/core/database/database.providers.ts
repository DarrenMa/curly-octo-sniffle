import "reflect-metadata";
import { databaseConfig } from './database.config';
import { createConnection } from "typeorm";
import { TYPEORM } from "../constants";

export const databaseProviders = [{
  provide: TYPEORM,
  useFactory: async () => {
    return await createConnection(databaseConfig)
  },
}];