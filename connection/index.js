// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createpool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'Passwodsk8!',
  database: 'test'
});

module.export = connection;
