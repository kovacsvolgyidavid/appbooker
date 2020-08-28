import { Service } from "./serviceBase";
import { Appointment } from "../entities/appointment";
import { Timetable } from "../entities/timetable";

export class AppointmentService implements Service<Timetable>{
    save(item: Timetable): Timetable {

    }

}