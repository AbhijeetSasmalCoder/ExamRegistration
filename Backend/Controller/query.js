var express = require('express');
var router = express.Router();
var models = require('../Model/model.js');

router.get('/', function(req, res){
   res.send('GET route on things.');
});

router.post('/', function(req, res){
   var student_id = req.query.student_id;
   var username = req.query.username;
   var email = req.query.email;
   var password = req.query.password;
   var name = req.query.name;
   var mobile = req.query.mobile;
   models.create_students(student_id, name, email, password,mobile,username);

});

module.exports = router;    