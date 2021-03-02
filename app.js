const express = require('express');
const env = require('dotenv');
const app = express();
const nodemon = require('nodemon');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Mongoose } = require('mongoose');


//environment variable or constant
env.config();

//mongodb connection
//Mongoose.connect(
//  `mongodb+srv://root:${process.env.MONGO_DB_PASSWORD}@cluster0.wvlt3.mongodb.net/${MONGO_DB_DBNAME}?retryWrites=true&w=majority`)
mongoose.connect(
    `mongodb+srv://goeasy:goeasy123@cluster0.edmhw.mongodb.net/goeasy?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }

).then(() => {
    console.log('db connected');
});

app.use(express.json());



 app.get('/',(req,res,next)=>{
      res.status(200).json({
          message:'hello from the server'
      });
  }); 

  app.post('/data',(req,res,next)=>{
      res.status(200).json({
          message: req.body
      });


app.listen(process.env.PORT, () => {
    console.log(`server is running on the port ${process.env.PORT}`);
});