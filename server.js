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

app.use('/lures', luresController)
app.use('/users', usersController);
app.use('/sessions', sessionsController);


// Database
mongoose.connect(mongoURI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

// Middleware
app.use(session({
  secret: 'randomstring',
  resave: false,
  saveUnitialized: false
}))
//use put and delete methods
app.use(methodOverride('_method'))
// parses info from input fields into an object
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'))





// Listen
app.listen(PORT, () => console.log('this is major tom on: ', PORT))
