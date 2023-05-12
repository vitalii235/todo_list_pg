export type GetResult<T> = T extends string ? T : T[];

export interface ICrudService<T> {
    create(data: T): Promise<T>;
    get(id?: string): Promise<GetResult<T> | null>;
    update(id: string, body: T): Promise<void>;
    delete(id: string): Promise<void>;
}

export interface IUserService<T> extends ICrudService<T>{
    getUserById(id: string): Promise<T | null>;
    getUserByEmail(email: string): Promise<T | null>;
}

export interface ITodoService<T> extends ICrudService<T>{
    getOneById(id: string): Promise<T | null>;
}
