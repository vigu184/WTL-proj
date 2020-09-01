var mysql = require('mysql');

var con = mysql.createConnection({
   host: "localhost",
  user: "root",
  password: "India@70",
  database: "minp"
 });

const express = require('express');
const bodyParser = require('body-parser'); //constant
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 


app.post('/example', (req, res) => {
res.send(`Full name is :${req.body.firstname} ${req.body.lastname} ${req.body.email} ${req.body.City}`);
con.connect(function(err) {
  if (err) throw err; //if is condition
  console.log("Connected!");
var sql = "INSERT INTO users values(" +`'${req.body.firstname}','${req.body.lastname}',`+`'${req.body.email}'` + "," + `'${req.body.City}'`+")";
   con.query(sql, function (err, result) 
   {
    if (err) throw err;
    console.log("Record inserted");
  });
});
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
