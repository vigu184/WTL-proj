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
   var sql = "CREATE TABLE Tutors (Tut_name VARCHAR(255), NOI VARCHAR(255), email VARCHAR(255) primary key, subject VARCHAR(255),city VARCHAR(255))";
   con.query(sql, function (err, result) 
   {
    if (err)  throw err;
    console.log("Table created");
   });
});