const mongoose = require("mongoose");

const empsScheme = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
    },
},
{ timestamps: true }
);

const Employee = mongoose.model("emps", empsScheme);

module.exports = Employee;
