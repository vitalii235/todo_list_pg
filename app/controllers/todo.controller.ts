import TodoService from "../services/todo.service";
import {Todo} from "../domain/entity/todo.entity";
import {Request} from "express";

class TodoController {
    private service: TodoService;
    method: Request['method'];

    constructor(service: TodoService, method: Request['method']) {
        this.service = service;
        this.method = method;
    }
    private async post(data: Todo): Promise<Todo> {
        return await this.service.create(data);
    }

    private async get(): Promise<Todo[]> {
        return await this.service.get();
    }

    private async update(id: string, data: Todo): Promise<void> {
        return await this.service.update(id, data);
    }

    private async delete(id: string): Promise<void> {
        return await this.service.delete(id);
    }

    async handleRequest(req: Request): Promise<Todo | Todo[] | void> {
        switch (this.method) {
            case 'POST':
                return await this.post(req.body);
            case 'GET':
                return await this.get();
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
