import { Interface } from "readline";
import { addListener } from "process";
import { Repository } from "typeorm";

export abstract class Service<T> {
    protected repo: Repository<T>;
    constructor(repo: Repository<T>) {
        this.repo = repo;
    }
    save(item: T): Promise<T> {
        return this.repo.save(item);
    }
}