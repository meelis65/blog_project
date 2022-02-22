import { createConnection, ConnectionOptions } from "typeorm";

export async function openDatabaseConnection() {
    
    // ESIMESE KOOLIPÄEVA TUNNIS TEGIME NII JA TEISEL KOOLIPÄEVAL LIIKUS SEE ormconfig faili
    // await closeDatabaseConnection();
    // const options: ConnectionOptions ={
    //     type: 'mysql', 
    //     host: 'localhost',
    //     port: 3306,
    //     username: 'root',
    //     password: 'Keli',
    //     database: 'blog',
    //     entities:['src'],
    //     synchronize: true
    // };

    // const conn = await createConnection(options);
    // const conn = await createConnection(options);
    // if(!conn.isConnected){
    //     throw new Error('Connection to database failed');
    // }
    // return conn;


    const conn = await createConnection();
    if(!conn.isConnected) {
        throw new Error('Connection to database failed');
    }
    return conn;
};