const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

// Configuration
const PORT = process.env.PORT || 3000
const mongoURI = process.env.MONGO_URI ||'mongodb://localhost/' + `tklbox`

const luresController = require('./controllers/lures.js');
app.use('/lures', luresController)

// Database
mongoose.connect(mongoURI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

// Middleware
//use put and delete methods
app.use(methodOverride('_method'))
// parses info from input fields into an object
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'))



// app.get('/', (req, res) => {
//     res.render('index.ejs')
// })

// Listen
app.listen(PORT, () => console.log('this is major tom on: ', PORT))
