import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Appointment {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    title!: string;

    @Column("timestamp with time zone")
    start!: Date;

    @Column("timestamp with time zone")
    end!: Date;

}