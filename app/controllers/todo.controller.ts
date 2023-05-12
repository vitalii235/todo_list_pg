import TodoService from "../services/todo.service";
import {Todo} from "../domain/entity/todo.entity";
import {Request} from "express";

const todoService = new TodoService();

class TodoController {
    private async post(data: Todo): Promise<Todo> {
        return await todoService.create(data);
    }

    private async get(id: string): Promise<Todo[]> {
        return await todoService.get(id);
    }

    private async getOneById(id: string): Promise<Todo | null> {
        return await todoService.getOneById(id);
    }

    private async update(id: string, data: Todo): Promise<void> {
        return await todoService.update(id, data);
    }

    private async delete(id: string): Promise<void> {
        return await todoService.delete(id);
    }

    async handleRequest(req: Request): Promise<Todo | Todo[] | void> {
        switch (req.method) {
            case 'POST':
                return await this.post(req.body);
            case 'GET':
                return await this.get('1');
            case 'PUT':
                return await this.update(req.params.id, req.body);
            case 'DELETE':
                return await this.delete(req.params.id);
            default:
                return;
        }
    }
}

export default TodoController;
