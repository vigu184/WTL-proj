var mysql = require('mysql');

var con = mysql.createConnection({
   host: "localhost",
  user: "root",
  password: "India@70",
  database: "minp"
 });


con.connect(function(err) {
  if (err) throw err;
   con.query("SELECT * FROM Tutors", function (err, result, fields) {
     if (err) throw err;
    console.log(result);
  });
 });