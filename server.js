const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const routes = require("./server/routes");
const app = express();
const PORT = process.env.PORT || 8000;

// Initialize Passport
const initPassport = require("./server/config/init");
initPassport(passport);

// Enable CORS from client-side
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Database Configuration with Mongoose
// ---------------------------------------------------------------------------------------------------------------
// Connect to localhost if not a production environment
if (process.env.NODE_ENV == "production") {
  // Gotten using `heroku config | grep MONGODB_URI` command in Command Line
  mongoose.connect(
    "mongodb://heroku_v0vnpbfj:73khkido42is3a68sivm9t3vpc@ds263707.mlab.com:63707/heroku_v0vnpbfj"
  );
} else {
  mongoose.connect("mongodb://localhost/DentalStudioDB");
}
const db = mongoose.connection;

// Show any Mongoose errors
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.use(
  session({
    secret:
      process.env.sessionKey || "SDADHKJHkdakdhaskdhkahiwheerqw412ue1edasa",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// Import database models
const Calendar = require("./server/models/calendar");
const Schedule = require("./server/models/schedule");
const User = require("./server/models/user");
const Message = require("./server/models/message");

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
