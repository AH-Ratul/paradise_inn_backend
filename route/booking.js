const express = require('express');
const db = require('../db/db');
const route = express.Router();

route.get('/', (req, res) => {
    res.send('booking response')
})

route.post('/', (req, res) => {
    const booking_data = req.body;
    console.log(booking_data);

    const insert_booking = `INSERT INTO room_book(name, user_phone, check_in, check_out, days) VALUES ('${booking_data.user_name}', '${booking_data.user_phone}', '${booking_data.check_in}', '${booking_data.check_out}', '${booking_data.days}');`;

    db.query(insert_booking, (err, rows, fields) => {
        if (err) {
          console.error(err.code);
          res.send(false);
          throw err;
        } else {
          console.log('inserted booking data into room_book table');
          //console.log(user.Name, user.Phone, user.reg_email, user.reg_pass);
        }
      });

    res.send('post success')
    console.log('booking data: ', req.body);
})

module.exports = route;