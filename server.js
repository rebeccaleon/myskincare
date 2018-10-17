const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./server/database');
const passport = require('./server/passport');
const mongoose = require("mongoose");
const routes = require("./server/routes/user.js");

const app = express();
const PORT = process.env.PORT || 3001;

//Route Requires
const user = require("./server/routes/user");
// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use('/user', user)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/react");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
