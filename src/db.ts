import { DataSource } from "typeorm";
import { evento } from "./Entities/evento";
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME } from "./config";

export const AppDataSource = new DataSource({
  type: "mysql",
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: Number(DB_PORT),
  // logging: true,
  synchronize: true,
  entities: [evento],
  ssl: false,
});
