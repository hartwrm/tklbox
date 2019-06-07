const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//USER SIGN UP PAGE
router.get('/new', (req, res) => {
  res.render('users/new.ejs')
})


//NEW USER POST
router.post('/luers', (req, res) => {
  console.log(req.body);
  User.create(req.body, (err, createdUser) => {
    res.redirect('/lures')
  })
})


module.exports = router
