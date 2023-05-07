export interface ICrudService<T> {
    create(data: T): Promise<T>;
    get(): Promise<T[]>;
    update(id: string, body: T): Promise<string>;
    delete(id: string): Promise<string>;
}
