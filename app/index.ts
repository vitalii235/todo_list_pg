import envConfig from "./config/env.config";
import express, {Express} from 'express';
import {connectToDataSource} from "./connections/typeorm.connection";
import todoRouter from "./routes/todo.router";
import userRouter from "./routes/user.router";
import authRouter from "./routes/auth/auth.router";
import tokenMiddleware from "./middlewares/token.middleware";

const app: Express = express();

app.use(express.json());

app.use('/todo', tokenMiddleware, todoRouter);

app.use('/user', userRouter);

app.use('/auth', authRouter);

app.listen(envConfig.port, async () => {
    try {
        console.log(`Server is running at http://localhost:${envConfig.port}`);
        await connectToDataSource();
    } catch (e) {
        console.error(e);
    }
});
