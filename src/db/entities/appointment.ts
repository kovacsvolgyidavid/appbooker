import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Timetable } from "./timetable";
import { EntityBase } from "./entityBase";

@Entity()
export class Appointment extends EntityBase {

    @Column()
    title!: string;

    @Column("timestamp with time zone")
    start!: Date;

    @Column("timestamp with time zone")
    end!: Date;

    @ManyToOne(type => Timetable, { nullable: false, eager: true })
    @JoinColumn()
    timetable!: Timetable;

}