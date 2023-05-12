import {IUserService} from "./types";
import {User} from "../domain/entity/user.entity";
import {Repository} from "typeorm";
import {db} from "../connections/typeorm.connection";

class UserService implements IUserService<User> {
    private repository: Repository<User>;

    constructor() {
        this.repository = db.getRepository(User);
    }

    async create(data: User): Promise<User> {
        const model = this.repository.create(data);
        return this.repository.save(model);
    }

    async get(): Promise<User[]> {
        return await this.repository.find({
            relations: {
                todos: true,
            }
        });
    }


    async getUserById(id: string): Promise<User | null> {
        return await this.repository.findOneBy({id});
    }

    async getUserByEmail(email: string): Promise<User | null> {
        return await this.repository.findOneBy({email});
    }

    async update(id: string, body: User): Promise<void> {
        const currentUser = await this.repository.findOneBy({id});
        if (currentUser instanceof User) {
            const updatedUser = this.repository.merge(currentUser, body);
            await this.repository.save(updatedUser);
        }
    }

    async delete(id: string): Promise<void> {
        await db.getRepository(User).delete(id);
    }
}

export default UserService;
