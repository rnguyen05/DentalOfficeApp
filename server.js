const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');

// SETUP PORT NUMBER
const PORT = 8000;

// SETUP THE APP INSTANCE
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('hello world');
});

app.listen(PORT, console.log('now listening on port', PORT));