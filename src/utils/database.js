const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'awgksjic_awgksjic',
  password: 'Cudjoe_233',
  database: 'awgksjic_awgksjic',
  dateStrings: 'date'
});

module.exports = pool;
