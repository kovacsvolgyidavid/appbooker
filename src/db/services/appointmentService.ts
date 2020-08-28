import { Service } from "./serviceBase";
import { Appointment } from "../entities/appointment";
import { Repository } from "typeorm";

export class AppointmentService extends Service<Appointment>{

    save(item: Appointment): Promise<Appointment> {
        return new Promise<Appointment>(() => { });
    }

}