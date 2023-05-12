import UserService from "../services/user.service";
import {User} from "../domain/entity/user.entity";
import {Request} from "express";

class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    private async post(request: Request): Promise<User> {
        const data = request.body;
        return await this.userService.create(data);
    }

    private async get(request: Request): Promise<User | null | User[]> {
        const id = request.params.id;
        if (id) {
            return await this.userService.getUserById(id);
        }
        return await this.userService.get();
    }

    async handleRequest(req: Request): Promise<User | void | User[] | null> {
        switch (req.method) {
            case 'POST':
                return await this.post(req);
            case 'GET':
                return await this.get(req);
            default:
                return;
        }
    }
}

export default UserController;
