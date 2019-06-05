const express = require('express');
const router = express.Router()
const Lure = require('../models/lures.js')


//INDEX
router.get('/', (req, res) => {
  res.render('index.ejs')
})
//NEW
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

//CREATE
router.post('/', (req, res) => {
  
})

module.exports = router;
