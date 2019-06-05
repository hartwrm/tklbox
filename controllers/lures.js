const express = require('express');
const router = express.Router()
const Lure = require('../models/lures.js')

router.get('/', (req, res) => {
  res.render('index.ejs')
})


module.exports = router;
