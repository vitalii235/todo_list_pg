import {DataSource } from "typeorm";
import {Todo} from "../domain/entity/todo.entity";

export const db = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : undefined,
    username: process.env.POSTGRES_USER,
    password: String(process.env.POSTGRES_PASSWORD),
    database: "postgres",
    entities: ['app/domain/entity/**/*.ts'],
    logging: false,
    synchronize: true,
})

export const connectToDataSource = async () => {
    db.initialize()
}
