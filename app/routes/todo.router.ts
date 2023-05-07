import express, {Request, Response} from "express";
import CrudService from "../services/todo.service";
import {Todo as TodoEntity} from "../entity/todo.entity";
import TodoController from "../controllers/todo.controller";

const todoService = new CrudService<typeof TodoEntity>(TodoEntity);
const todoController = new TodoController<typeof TodoEntity>(todoService);

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const todos = await todoController.get();
    res.send({data: todos})
});

router.post('/', async (req: Request, res: Response) => {
    const todo = await todoController.create(req.body);
    res.send({data: todo});
});

router.put('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const todo = await todoController.update(id, req.body);
    res.send({data: todo});
});

router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const todo = await todoController.delete(id);
    res.send({data: todo});
});


export default router;
