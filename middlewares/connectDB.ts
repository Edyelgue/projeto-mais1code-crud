import mysql from 'mysql2';

// create the connection to database
/*
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'vendasdb'
});*/

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'vendasdb'
});

// simple query
/*
con.query(
  'SELECT * FROM CLIENTES',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);*/

console.log('banco conectado!')
export default con;
