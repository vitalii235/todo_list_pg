import {Request} from "express";
import UserService from "../services/user.service";
import {PATHS} from "../routes/auth/types";
import {User} from "../domain/entity/user.entity";
import {Token} from "../domain/entity/token.entity";
import generateToken from "../utils/generateToken";
import TokenService from "../services/token.service";

const userService = new UserService();
const tokenService = new TokenService();

class AuthController {
    async login(req: Request) {
        const signInData = req.body;
        const user = await userService.getUserByEmail(signInData.email);
        if(!user) {
            return;
        }
        if(user.password !== signInData.password) {
            return;
        }
        const tokenInstance = new Token({
            userId: user.userId,
            token: generateToken(),
        })
        return await tokenService.create(tokenInstance);
    };

    async register(req: Request) {
        const data:User = req.body;
        data.userId = String(Date.now());
        const user = await userService.create(data);

        const tokenInstance = new Token({
            userId: user.userId,
            token: generateToken()
        })
        return await tokenService.create(tokenInstance);
    };

    handleRequest(req: Request) {
        switch (req.method) {
            case 'POST':
                if(req.url === PATHS.LOGIN) {
                    return this.login(req);
                }
                if(req.url === PATHS.REGISTER) {
                    return this.register(req);
                }
                return;
            case 'GET':
                return this.register(req);
            default:
                return;
        }
    }


}

export default AuthController;
