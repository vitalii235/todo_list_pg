import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user.entity";

@Entity({name: "tokens"})
export class Token {
    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    token!: string;

    @Column()
    userId!: string;

    constructor(token: Token) {
        this.token = token?.token || '';
        this.userId = token?.userId || '';
        if (token?.id) {
            this.id = token.id;
        }

    }
}
