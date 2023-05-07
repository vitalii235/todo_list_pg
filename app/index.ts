import dotenv from 'dotenv';
dotenv.config();
import express, {Express} from 'express';
import client from "./connections/pg.connection";
import {connectToDataSource} from "./connections/typeorm.connection";
import todoRouter from "./routes/todo.router";

const app: Express = express();
app.use(express.json());

app.use(todoRouter)

const port = process.env.PORT;

app.listen(port, async () => {
    try {
        await client.connect();
        console.log(`Server is running at http://localhost:${port}`);
        await connectToDataSource();
    } catch (e) {
        console.error(e);
    }
});
