import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Timetable {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name!: string;

}