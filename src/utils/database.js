const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost:3306',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dateStrings: 'date',
  port: 3306,
}).t;

module.exports = pool;
