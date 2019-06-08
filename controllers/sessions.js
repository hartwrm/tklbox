const express = require('express');
const router = express.Router();
const User = require('../models/users.js')

router.get('/login', (req, res) => {
  res.render('sessions/login.ejs')
})


module.exports = router;
