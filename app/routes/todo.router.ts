import express, {Request, Response} from "express";
import TodoController from "../controllers/todo.controller";
import tokenMiddleware from "../middlewares/token.middleware";

const router = express.Router();

router.get('/', tokenMiddleware, async (req: Request, res: Response) => {
    const todoController = new TodoController();
    const todos = await todoController.handleRequest(req);
    res.send({data: todos})
});

router.post('/', async (req: Request, res: Response) => {
    const todoController = new TodoController();
    const todo = await todoController.handleRequest(req);
    res.send({data: todo});
});

router.put('/:id', async (req: Request, res: Response) => {
    const todoController = new TodoController();
    const todo = await todoController.handleRequest(req);
    res.send({data: todo});
});

router.delete('/:id', async (req: Request, res: Response) => {
    const todoController = new TodoController();
    const todo = await todoController.handleRequest(req);
    res.send({data: todo});
});


export default router;
