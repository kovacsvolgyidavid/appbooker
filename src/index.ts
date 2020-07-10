console.log("started2");
import dotenv = require('dotenv');
import connection from './db/database';
import { error } from 'console';

connection.then(con=>{
    con.query('select now()').then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err)
    })

}
    
    )

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

console.log(process.env.DB_PORT);


