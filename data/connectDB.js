import mysql from 'mysql2/promise';


  const pool = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'test',
    // port: 3306,
    // password: '',
  });

  module.exports = pool