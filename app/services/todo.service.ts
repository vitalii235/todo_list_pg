import {ICrudService} from "./types";
import {Repository} from "typeorm";
import {Todo} from "../domain/entity/todo.entity";
import {db} from "../connections/typeorm.connection";

class TodoService implements ICrudService<Todo> {
    repository: Repository<Todo>
    constructor() {
        this.repository = db.getRepository(Todo);
    }
    async create(data: Todo): Promise<Todo> {
        const model = db.getRepository(Todo).create(data);
        return this.repository.save(model);
    }
    async get(): Promise<Todo[]> {
        return await this.repository.find();
    }
    async update(id: string, body: Todo): Promise<void> {
        const currentTodo = await this.repository.findOneBy({id});
        if (currentTodo instanceof Todo) {
            const updatedTodo = this.repository.merge(currentTodo, body);
            await this.repository.save(updatedTodo);
        }
    }
    async delete(id: string): Promise<void> {
        await db.getRepository(Todo).delete(id);
    }
}

export default TodoService;
