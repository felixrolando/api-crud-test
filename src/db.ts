import { DataSource } from "typeorm";
import { Client } from "./models/client";
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME } from "./config";
import { Address } from "./models/address";
import { Perfil } from "./models/perfil";

export const AppDataSource = new DataSource({
    type: "mysql",
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: Number(DB_PORT),
    // logging: true,
    synchronize: true,
    entities: [Client, Address, Perfil],
    ssl: true,
});