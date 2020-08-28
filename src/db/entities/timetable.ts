import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { EntityBase } from "./entityBase";

@Entity()
export class Timetable extends EntityBase {

    @Column()
    name!: string;

}