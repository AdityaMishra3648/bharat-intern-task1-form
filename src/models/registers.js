const mongoose = require("mongoose");
const form_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

// ==================now defining collection

const Register = new mongoose.model("Register",form_schema);
module.exports = Register;