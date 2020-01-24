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
   var sql = "INSERT INTO users(first_name, last_name, email, city) VALUES ('Akhilesh', 'Kumar', 'akhilkum@gmail.com', 'Delhi')";
   con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});