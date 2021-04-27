const Mongoose = require("mongoose")

// Schema

const Student = new Mongoose.Schema({
    student_id: {type:String},
    name: {type:String},
    email: {type:String},
    password: {type:String},
    mobile: {type:String},
    username: {type:String}
});

const Exams = new Mongoose.Schema({
    exam_id: Number,
    exam_name: String,
    date_of_exam: String,
    exam_des: String
});

const Result = new Mongoose.Schema({
    student_id: Number,
    exam_id: Number,
    result: String,
    result_id: Number
});


var student = Mongoose.model("Students", Student);
module.exports = student;

var exams = Mongoose.model("Exams", Exams);
module.exports = exams;

var result = Mongoose.model("Results", Result);
module.exports = result;



// CRUD Operations

//Create Operations for all tables

module.exports.create_students = function(student_id, name, email, password,mobile,username) {

    var newStudent = new student({
        student_id: student_id,
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        username: username
    });

    newStudent.save(function(err){
        if(err == null)
            console.log('Success');
        else
            console.log('Fail ' + err);           
     });
}

module.exports.create_exams = function(exam_id, exam_name, date_of_exam, exam_des) {
    var newExam = new Exams({
        exam_id: exam_id,
        exam_name: exam_name,
        date_of_exam: date_of_exam,
        exam_des: exam_des
    });

    newExam.save(function(err){
        if(err==null)
            console.log('Success');
        else
            console.log('Fail ' + err);                       
    });
}

module.exports.create_results = function(result_id, student_id, exam_id, result) {
    var newResult = new Result({
        student_id: student_id,
        exam_id: exam_id,
        result: result,
        result_id: result_id
    });

    newResult.save(function(err){
        if(err==null)
            console.log('Success');
        else
            console.log('Fail ' + err);                       
    });
}