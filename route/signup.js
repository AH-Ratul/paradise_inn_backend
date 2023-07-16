const express = require('express');
const db = require('../db/db');

const route = express.Router();

route.get('/', (req, res) => {
    res.send('getting response');
});

route.post('/', (req, res) => {
    const user = req.body;
    //console.log(user);
    const insert_user = `INSERT INTO user(name, phone, email, password) VALUES ('${user.Name}', '${user.Phone}', '${user.reg_email}', '${user.reg_pass}');`;

    //console.log(insert_user);
    db.query(insert_user, (err, rows, fields) => {
        if (err) {
          console.error(err.code);
          res.send(false);
          throw err;
        } else {
          console.log('inserted user data into user_tbl');
          //console.log(user.Name, user.Phone, user.reg_email, user.reg_pass);
        }
      });

    res.send('post success')
    console.log('data: ', req.body);
})

module.exports = route;