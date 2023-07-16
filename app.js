const express = require('express');
const mysql = require('mysql');
const db = require('./db/db');
const signup = require('./route/signup');
const login = require('./route/login');
const booking = require('./route/booking');
const cors = require('cors');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5500;

 
  app.use(cors());
  app.use(express.json());
 
  //--------------------- route ---------------------
  app.use('/signup', signup);
  app.use('/login', login);
  app.use('/booking', booking);



  //------------------- api route ------------------------------------
  app.get('/', (req, res) => {
    res.send('server is running at port ' +port);
    console.log(port);
  })
  
//    app.get('/signup', (req, res) => {
//      res.send('getting response');
//    })
  
  //--------------------- Start the server -----------------------------
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });