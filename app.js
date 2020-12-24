const http = require('http');
const express = require('express');
const app = express();
const nodemon = require('nodemon');
const mongoose = require('mongoose');
require('dotenv/config');

//MIDDLEWARES
//app.use('/api',()=>{
  //  console.log('this is middleware running')
//})

//ROUTES
app.get('/',(req,res)=>{
    res.send('we are on home')
});

app.get('/api',(req,res)=>{
    res.send('we are on home api')
});

//app.delete('/',(req,res)=>{
  //  res.send('we are on home')
//});

//app.patch('/',(req,res)=>{
  //  res.send('we are on home')
//});

//connect to DB

mongoose.connect('mongodb+srv://root:merebhai@cluster0.wvlt3.mongodb.net/ecommerce?retryWrites=true&w=majority', {useNewUrlParser: true },()=>{
    console.log('DB CONNECTED') 
    
})




//HOW WE START LISTENING TO THE SERVER
app.listen(4000);
    