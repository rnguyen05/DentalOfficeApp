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
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
app.use(routes);
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/DentalOffice"
);


app.listen(PORT, console.log('now listening on port', PORT));