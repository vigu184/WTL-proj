var mysql = require('mysql');

var con = mysql.createConnection({
   host: "localhost",
  user: "root",
  password: "India@70",
  database: "minp"
 });

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 


app.post('/TutReg', (req, res) => {
res.send(`Full name is : ${req.body.TutName}, ${req.body.NOI}, ${req.body.email}, ${req.body.Subject}, ${req.body.City}`);
con.connect(function(err) 
{
  if (err) throw err;
  console.log("Connected!");
var sql = "INSERT INTO Tutors values(" +`'${req.body.TutName}','${req.body.NOI}',`+`'${req.body.email}'` + "," +`'${req.body.Subject}','${req.body.City}'`+")";
   con.query(sql, function (err, result) 
   {
    if (err) throw err;
    console.log("Record inserted");
  });
});
});

const port = 8081;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});