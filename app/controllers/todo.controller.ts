import TodoService from "../services/todo.service";
import {ITodo} from "../types/todo";
import Todo from "../domain/models/todo";

class TodoController<T> {
    private service: TodoService<T>;

    constructor(service: TodoService<T>) {
        this.service = service;
    }
    async create(data: T): Promise<T> {
        return await this.service.create(data);
    }

    async get(): Promise<T[]> {
        return await this.service.get();
    }

    async update(id: string, data: T): Promise<string> {
        return await this.service.update(id, data);
    }

    async delete(id: string): Promise<string> {
        return await this.service.delete(id);
    }
}

export default TodoController;
