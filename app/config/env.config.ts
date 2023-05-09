import dotenv from 'dotenv';
dotenv.config();

class EnvConfig {
    host: string;
    port: number;
    pgPort: number;
    username: string;
    password: string;
    database: string;

    constructor() {
        this.host = process.env.POSTGRES_HOST || 'localhost';
        this.pgPort = process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432;
        this.username = process.env.POSTGRES_USER || 'postgres';
        this.password = process.env.POSTGRES_PASSWORD || 'postgres';
        this.database = process.env.POSTGRES_DB || 'postgres';
        this.port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
    }
}

export default new EnvConfig();
