const mongoose = require('mongoose');
const testscoreSchema = new mongoose.Schema({
    testscore1:{
        type:Int8Array,
        required:true,
        trim:true
    

    },
    testscore2:{
        type:Int8Array,
        required:true,
        trim:true
    },
    testscore3:{
        type:Int8Array,
        required:true,
        trim:true
},{timestamps:true});

module.exports = mongoose.app('testscore',testscoreSchema);