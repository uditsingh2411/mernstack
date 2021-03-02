const mongoose = require('mongoose');
const candidateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    

    },
    email:{
        type:String,
    }
},{timestamps:true});

module.exports = mongoose.model('candidate',candidateSchema);