import express, {Request, Response} from "express";
import UserService from "../services/user.service";
import UserController from "../controllers/user.controller";

const userService = new UserService();

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const userController = new UserController(userService);
    const users = await userController.handleRequest(req);
    res.send({data: users})
});

router.post('/', async (req: Request, res: Response) => {
    const userController = new UserController(userService);
    const user = await userController.handleRequest(req);
    res.send({data: user});
});

export default router;
