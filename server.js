const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

// Configuration
const PORT = process.env.PORT
const mongoURI = process.env.MONGO_URI

// Middleware
//use put and delete methods
app.use(methodOverride('_method'))
// parses info from input fields into an object
app.use(express.urlencoded({ extended: false }))

// Database
mongoose.connect(mongoURI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

app.get('/', (req, res) => {
  res.render('index.ejs')
})

// Listen
app.listen(PORT, () => console.log('this is major tom on: ', PORT))
