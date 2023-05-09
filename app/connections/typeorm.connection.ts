import {DataSource } from "typeorm";
import envConfig from "../config/env.config";

export const db = new DataSource({
    type: "postgres",
    host: envConfig.host,
    port: envConfig.pgPort,
    username: envConfig.username,
    password: envConfig.password,
    database: envConfig.database,
    entities: ['app/domain/entity/**/*.ts'],
    logging: true,
    synchronize: true,
})

export const connectToDataSource = async () => {
    db.initialize()
}
