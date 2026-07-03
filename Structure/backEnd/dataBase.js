import mysql from 'mysql2/promise';

const DB_CONFIG = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hotelwebapp'
};

let connection;

export async function getConnection() {
  if (!connection) {
    connection = await mysql.createConnection(DB_CONFIG);
    console.log('Database connected successfully');
  }
  return connection;
}
