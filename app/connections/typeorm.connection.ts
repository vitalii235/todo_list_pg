import {DataSource } from "typeorm";
import {Todo} from "../entity/todo.entity";

export const connectToDataSource = async () => {
    const db = await new DataSource({
        type: "postgres",
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : undefined,
        username: process.env.POSTGRES_USER,
        password: String(process.env.POSTGRES_PASSWORD),
        database: "postgres",
        entities: ['app/entity/**/*.ts'],
        logging: false,
        synchronize: true,
    })
    const res = await db.initialize()

    return res;
}
