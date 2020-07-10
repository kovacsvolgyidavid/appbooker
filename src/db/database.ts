import {createConnection, Connection} from "typeorm";

const connection: Promise<Connection>=createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "appointment"
});

export = connection;