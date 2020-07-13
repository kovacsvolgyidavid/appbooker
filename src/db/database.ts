import {createConnection, ConnectionOptions, Connection, getManager, EntityManager, Repository, getCustomRepository, ObjectType, getConnectionManager } from "typeorm";

export const defaultOptions: ConnectionOptions =  {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "appointment",
    entities: ["src/db/entities/*"],    
}

export const getConnection: (options?: any)=> Promise<Connection>
=async (options)=>{
return createConnection(options||{...defaultOptions})
};

export const closeConnection: ()=>void = ()=>{
    getConnectionManager().get('default').close();
}

export const testConnection: ()=>Promise<any> = ()=>{
    const em: EntityManager = getManager();
    return em.query('select 1+1 as sum');
} 

export const getRepository: <T> (type: ObjectType<Repository<T>>) => Repository<T> = (type)=>{
    return getCustomRepository(type);
}