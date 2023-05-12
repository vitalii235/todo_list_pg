import {NextFunction, Request, Response,} from "express";
import getTokenValue from "../utils/getTokenValue";
import TokenService from "../services/token.service";

const tokenService = new TokenService();

const tokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if(!token) {
        return res.sendStatus(401);
    }
    const tokenValue = getTokenValue(token, 'Bearer');
    const tokenData = await tokenService.getOneBy(tokenValue);
    if(!tokenData) {
        return res.sendStatus(401);
    }
    req.userId = tokenData.userId;
    next();
}

export default tokenMiddleware;
