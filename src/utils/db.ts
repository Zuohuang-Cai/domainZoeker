import mysql from 'mysql2/promise';

const connection: Promise<mysql.Connection> = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});
export default connection;
