const mysql = require('mysql2/promise');

// create the connection to database
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "josedavid1765114",
    database: "daily_bits",
    multipleStatements: true,
    charset: "utf8mb4",
    decimalNumbers: true,
    port: "3306"
});

pool.getConnection()
  .then(conn => {
    const res = conn.query('SELECT 1');
    conn.release();
    return res;
  }).then(results => {
    console.log('Connected to MySQL DB');
  }).catch(err => {
    console.log(err); 
  });

  
  module.exports = pool