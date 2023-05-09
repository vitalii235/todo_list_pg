export interface ICrudService<T> {
    create(data: T): Promise<T>;
    get(): Promise<T[]>;
    update(id: string, body: T): Promise<void>;
    delete(id: string): Promise<void>;
}
