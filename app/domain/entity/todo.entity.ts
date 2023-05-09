import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "todo"})
export class Todo {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column({default: false})
    completed!: boolean;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    date!: Date;

    constructor(todo: Todo) {
        this.title = todo?.title || '';
        this.description = todo?.description || '';
        this.completed = todo?.completed || false;
        this.date = todo?.date || new Date();
        if (todo?.id) {
            this.id = todo.id;
        }
    }
}
