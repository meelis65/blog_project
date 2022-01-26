import { createConnection, ConnectionOptions } from 'typeorm';

export async function openDatabaseConnection() {
    // await closeDataConnection();

    const conn = await createConnection();
    if(!conn.isConnected) {
        throw new Error('Connection to database failed');
    }
    return conn;
}