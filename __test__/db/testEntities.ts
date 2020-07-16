import { Timetable } from "../../src/db/entities/timetable";
import { Appointment } from "../../src/db/entities/appointment";

export const testTimetable: Timetable = {
    name: 'Test name for time table'
}

export const testAppointment: Appointment = {
    title: 'Going for a bug hunt',
    start: new Date('2019-04-05 23:12:00'),
    end: new Date('2019-04-05 23:33:00'),
}