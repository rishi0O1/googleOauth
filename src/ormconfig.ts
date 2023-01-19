import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({ path: join(__dirname, '..', `.env`) });

const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  entities: [join(__dirname, '**', '**', '*.entity{.ts,.js}')],
  //   migrations: [join(__dirname, 'database', 'migrations', '*{.ts,.js}')],
  //   cli: {
  //     migrationsDir: path.join(__dirname, 'database', 'migrations'),
  //   },
  // migrationsRun: true,
  synchronize: true,
  maxQueryExecutionTime: 5000,
  logging: true,
  // logger: "file",
};

export default ormconfig;
