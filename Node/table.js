var mysql = require('mysql');

var con = mysql.createConnection({
   host: "localhost",
  user: "root",
  password: "India@70",
  database: "minp"
 });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
   var sql = "CREATE TABLE users (first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255) primary key, city VARCHAR(255))";
   con.query(sql, function (err, result) {
    if (err)  throw err;
    console.log("Table created");
  });
});