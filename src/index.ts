console.log("started2");
import dotenv = require('dotenv');
import {getConnection} from './db/database';
import { getManager, EntityManager } from 'typeorm';
import { Timetable } from './db/entities/timetable';

getConnection().then(con=>{
    const em: EntityManager = getManager();
    const a : Timetable = {name:"doctor's appointments"}
    em.save(Timetable, a).then(console.log).catch(console.log);

}
    
    )

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

console.log(process.env.DB_PORT);


