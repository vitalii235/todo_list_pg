import {ITodo} from "../../types/todo";

class Todo implements ITodo {
    title: string;
    description: string;
    completed: boolean;
    id?: string;
    date: Date;

    constructor(todo: ITodo) {
        this.title = todo?.title || '';
        this.description = todo?.description || '';
        this.completed = todo?.completed || false;
        this.date = todo?.date || new Date();
        if (todo.id) {
            this.id = todo.id;
        }
    }
}

export default Todo;
