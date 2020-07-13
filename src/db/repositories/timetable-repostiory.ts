import {Repository, EntityRepository} from 'typeorm'
import { Timetable } from '../entities/timetable';

@EntityRepository(Timetable)
export class TimetableRepository extends Repository<Timetable>{
    static foo: ()=>TimetableRepository = ()=>{
        return new TimetableRepository();
    }
}