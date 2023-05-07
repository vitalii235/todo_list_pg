import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity({name: "todo"})
export class Todo extends BaseEntity {
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
}
