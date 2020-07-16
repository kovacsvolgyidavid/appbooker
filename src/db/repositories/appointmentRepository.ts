import { Repository, EntityRepository, SaveOptions } from 'typeorm'
import { Appointment } from '../entities/appointment';

@EntityRepository(Appointment)
export class AppointmentRepository extends Repository<Appointment>{



}