const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',     
    user: 'root', 
    password: '', 
    database: 'hms' 
  });
  
  db.connect((error) => {
    if (error) {
      console.error('Error connecting to the database:', error);
      return;
    }
    console.log('Connected to the database!');
  });

  
//    db.query('SELECT * FROM user', (error, results, fields) => {
//      if (error) {
//        console.error('Error executing query:', error);
//        return;
//      }
//      console.log('Query results:', results);
//    });

  module.exports = db;