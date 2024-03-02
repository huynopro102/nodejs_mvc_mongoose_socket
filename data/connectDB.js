const mysql = require('mysql2/promise');

  const pool =   mysql.createPool({
      host: 'localhost',
      user: 'root',
      database: 'test',
      // port: 3306,
      // password: '',
    });


module.exports = pool