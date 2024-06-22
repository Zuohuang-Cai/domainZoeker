import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

export default connection;
