import {ITodoService} from "./types";
import {Repository} from "typeorm";
import {Todo} from "../domain/entity/todo.entity";
import {db} from "../connections/typeorm.connection";

class TodoService implements ITodoService<Todo> {
    repository: Repository<Todo>
    constructor() {
        this.repository = db.getRepository(Todo);
    }
    async create(data: Todo): Promise<Todo> {
        const model = this.repository.create(data);
        return this.repository.save(model);
    }
    async get(id: string): Promise<Todo[]> {
        return await this.repository.find({
            where: {user: {id}}
        });
    }
    async getOneById(id: string): Promise<Todo | null> {
        return await this.repository.findOneBy({
           id
        });
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
