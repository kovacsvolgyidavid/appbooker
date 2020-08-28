import { EntityBase } from "../../entities/entityBase";
import { Service } from "../serviceBase";
import { Appointment } from "../../entities/appointment";
import { Repository } from "typeorm";
import { AppointmentRepository } from "../../repositories/appointmentRepository";

class ServiceConfig {
    repository!: new (...args: any[]) => Repository<EntityBase>
}

const typeMap = new Map<typeof EntityBase, ServiceConfig>();

typeMap.set(Appointment, { repository: AppointmentRepository })

export const getService: <T>(type: T extends EntityBase) => Service<T> = (type) => {
    return
}