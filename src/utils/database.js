const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dateStrings: 'date',
  port: 3306,
});

module.exports = pool;