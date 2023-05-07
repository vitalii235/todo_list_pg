import { Client } from 'pg';

const client = new Client(
    {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : undefined,
        user: process.env.POSTGRES_USER,
        password: String(process.env.POSTGRES_PASSWORD),
    }
)
export default client;
