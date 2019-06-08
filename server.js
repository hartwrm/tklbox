const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const session = require('express-session');


// Configuration
const PORT = process.env.PORT || 3000
const mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/' + `tklbox`

const luresController = require('./controllers/lures.js');
const usersController = require('./controllers/users.js');
const sessionsController = require('./controllers/sessions.js');




// Database
mongoose.connect(mongoURI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})


//use put and delete methods
app.use(methodOverride('_method'))
// Middleware
app.use(express.json());
app.use(session({
  secret: 'randomstring',
  resave: false,
  saveUnitialized: false
}))
// parses info from input fields into an object
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/lures', luresController)
app.use('/users', usersController);
app.use('/sessions', sessionsController);




// Listen
app.listen(PORT, () => console.log('this is major tom on: ', PORT))
