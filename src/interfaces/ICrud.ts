export interface ICrud<T> {
    listAll(): Promise<T[]>;
    create(data: T): Promise<T>;
    update(data: T, id: number): Promise<T>;
    delete(id: number): Promise<boolean>;
}