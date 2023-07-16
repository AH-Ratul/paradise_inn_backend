const express = require('express');
const db = require('../db/db');

const route = express.Router();

route.get('/', (req, res) => {
    res.send('getting response for login');
});

route.post('/', (req, res) => {

    const requestedUser = req.body;
    //console.log(requestedUser);
    
    try{
      const  fetch_user = `SELECT * FROM user WHERE user.email = '${requestedUser.email}';`;
      let user =
      db.query(fetch_user, (err, row) => {
             if(err) {
                console.log(err);
                throw err;
            }
          else {
               //user = row[0];
               //console.log(row[0].email);
               if(row[0].password === requestedUser.pass){
                //console.log(fetch_user?.data?.pass);
                 res.json(row[0])
              }
              else {
                res.send('password not match');
              }
           }
        })
    console.log(user);
    
    }catch(e){
      console.log(e.message);
    }



    //res.send('login success')
    //console.log('data: ', req.body);
});


module.exports = route;