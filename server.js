const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const routes = require("./routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test";
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;

//Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

//Mongoose connedtion to db
db.once("open", function() {
  console.log("Mongoose connection successful!");
});

// Import the Article model
const Calendar = require("./models/calendar");
const Schedule = require("./models/schedule");

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
