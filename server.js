const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var n1=Number(req.body.Number1);
  var n2=Number(req.body.Number2);
  var result = n1 + n2;

  res.send("The answer is " + result);
});





app.listen(3000, function(){
  console.log("Server has started on the port 3000");
});
