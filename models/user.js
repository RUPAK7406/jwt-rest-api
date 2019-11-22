const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {type : String, required: true, min : 1, max : 250},
    email : {type : String, required: true, min : 1, max : 250},
    password : {type : String, required: true, min : 1, max : 1024},
   date : {type : Date, default : Date.now}
});

module.exports = mongoose.model('User', userSchema);
