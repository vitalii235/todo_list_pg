import {Repository} from "typeorm";
import {Token} from "../domain/entity/token.entity";
import {db} from "../connections/typeorm.connection";

class TokenService {
    private repository: Repository<Token>;

    constructor() {
        this.repository = db.getRepository(Token);
    }

    async create(data: Token): Promise<string> {
        const model = this.repository.create(data);
        const token = await this.repository.save(model);
        return token.token
    }

    async getOneBy(token: string): Promise<Token | null> {
        return await this.repository.findOneBy({token});
    }
}

export default TokenService;
