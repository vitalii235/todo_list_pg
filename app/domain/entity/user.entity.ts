import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Todo} from "./todo.entity";
import {Token} from "./token.entity";

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    userId!: string;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @OneToMany(() => Todo, (todo) => todo.user, {cascade: true})
    todos!: Todo[];

    constructor(user: User) {
        this.name = user?.name || '';
        this.email = user?.email || '';
        this.password = user?.password || '';
        this.userId = user?.userId || '';
        if (user?.id) {
            this.id = user.id;
        }
    }

}
