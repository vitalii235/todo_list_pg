import express, {Request, Response} from "express";
import AuthController from "../../controllers/auth.controller";
import {PATHS} from "./types";

const router = express.Router();

router.post(PATHS.LOGIN, async (req: Request, res: Response) => {
    const authController = new AuthController();
    const users = await authController.handleRequest(req);
    res.send({data: users})
});

router.post(PATHS.REGISTER, async (req: Request, res: Response) => {
    const authController = new AuthController();
    const token = await authController.handleRequest(req);
    res.send({data: token});
});

export default router;
