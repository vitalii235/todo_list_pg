import express, {Request, Response} from "express";
import CrudService from "../services/todo.service";
import {Todo as TodoEntity} from "../domain/entity/todo.entity";
import TodoController from "../controllers/todo.controller";

const todoService = new CrudService();

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const todoController = new TodoController(todoService, req.method);
    const todos = await todoController.handleRequest(req);
    res.send({data: todos})
});

router.post('/', async (req: Request, res: Response) => {
    const todoController = new TodoController(todoService, req.method);
    const todo = await todoController.handleRequest(req);
    res.send({data: todo});
});

router.put('/:id', async (req: Request, res: Response) => {
    const todoController = new TodoController(todoService, req.method);
    const todo = await todoController.handleRequest(req);
    res.send({data: todo});
});

router.delete('/:id', async (req: Request, res: Response) => {
    const todoController = new TodoController(todoService, req.method);
    const todo = await todoController.handleRequest(req);
    res.send({data: todo});
});


export default router;
