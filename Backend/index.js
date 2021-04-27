var express = require('express');
var app = express();

var query = require('./Controller/query.js');
app.use('/',query);

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/exam_registration", {
  useNewUrlParser: "true",
  useUnifiedTopology: "true"
})

mongoose.connection.on("error", err => {
  console.log("err", err)
})

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})



app.listen(3000);