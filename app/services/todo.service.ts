import {ICrudService} from "./types";
import {BaseEntity} from "typeorm";

class TodoService<T, U extends BaseEntity = BaseEntity> implements ICrudService<T> {
    Entity: new () => U;
    constructor(Entity: new () => U) {
        this.Entity = Entity;
    }
    async create(data: T): Promise<T> {
        //@ts-ignore
        const model = this.Entity.create(data);
        //@ts-ignore
        return this.Entity.save(model);
    }
    async get(): Promise<T[]> {
        //@ts-ignore
        return await this.Entity.find();
    }
    async update(id: string, body: T): Promise<string> {
        //@ts-ignore
        const currentTodo = await this.Entity.findOneBy({id});
        //@ts-ignore
        const updatedTodo = this.Entity.merge(currentTodo, body);
        //@ts-ignore
        return this.Entity.save(updatedTodo);
    }
    delete(id: string): Promise<string> {
        //@ts-ignore
        return this.Entity.delete(id);
    }
}

export default TodoService;
