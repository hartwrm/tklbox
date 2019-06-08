const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt')

//USER SIGN UP PAGE
router.get('/new', (req, res) => {
  res.render('users/new.ejs')
})


//NEW USER log in
router.post('/', (req, res) => {
  console.log(req.body.password);
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (err, createdUser) => {
    req.session.currentUser = user
    res.redirect('/lures')
  })
})


module.exports = router
