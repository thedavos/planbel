/* eslint-disable no-console */
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const server = require('http').createServer(app);

// Middlewares
app.use(logger('dev'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Support parsing of application/json type post data
app.use(bodyParser.json());

// Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
require('./routes/views')(app);
require('./routes/specials')(app);

// Server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
