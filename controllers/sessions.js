const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt')



router.get('/login', (req, res) => {
  res.render('sessions/login.ejs')
})

//log in
router.post('/', (req, res) => {
  console.log(req.body);
  User.findOne({username: req.body.username}, (err, foundUser) => {
    if (!foundUser) {
      res.send('Can not find user')
    } else if (req.body.password === foundUser.password) {
      req.session.currentUser = foundUser;
      res.redirect('/lures')
    } else {
      res.send('wrong password')
    }
  })
})

module.exports = router;
