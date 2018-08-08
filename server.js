const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const routes = require("./routes");
const mongoose = require("mongoose");
// SETUP PORT NUMBER
//const PORT = 8000;
const PORT = process.env.PORT || 3001;
// SETUP THE APP INSTANCE
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     console.log('hello world');
// });
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   }
app.use(routes);
// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/DentalOffice"
// );

// if(process.env.NODE_ENV == 'production'){
//     // Gotten using `heroku config | grep MONGODB_URI` command in Command Line
//    // mongoose.connect('mongodb://heroku_kbdv0v69:860jh71jd1iu5m5639gjr0gg9l@ds129028.mlab.com:29028/heroku_kbdv0v69');
//     app.use(express.static("client/build"));
// }
//   else{
//     mongoose.connect('mongodb://localhost/test');
// //   }
//   var db = mongoose.connection;
  
//   // Show any Mongoose errors
//   db.on('error', function(err) {
//     console.log('Mongoose Error: ', err);
//   });
  
//   // Once logged in to the db through mongoose, log a success message
//   db.once('open', function() {
//     console.log('Mongoose connection successful.');
//   });
  /////
  var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test";
mongoose.connect(MONGODB_URI
  );
const db = mongoose.connection;

//Show any mongoose errors
db.on("error", function(error) 
{
  console.log("Mongoose Error: ", error);
});

//Mongoose connedtion to db
db.once("open", function() 
{
  console.log("Mongoose connection successful!");
});
  /////
  // Import the Article model
  var Calendar = require('./models/calendar');
  var Schedule = require('./models/schedule');

app.listen(PORT, console.log('now listening on port', PORT));