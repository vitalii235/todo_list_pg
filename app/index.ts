import envConfig from "./config/env.config";
import express, {Express} from 'express';
import {connectToDataSource} from "./connections/typeorm.connection";
import todoRouter from "./routes/todo.router";

const app: Express = express();

app.use(express.json());

app.use(todoRouter);

app.listen(envConfig.port, async () => {
    try {
        console.log(`Server is running at http://localhost:${envConfig.port}`);
        await connectToDataSource();
    } catch (e) {
        console.error(e);
    }
});
