const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const config = require('./config');

mongoose.connect(process.env.MONGODB_URI || config.database);

mongoose.Promise = global.Promise;

const app = express();

app.set('secret', config.secret);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory setup
app.use(express.static(path.join(__dirname, '..', 'public')));

// Accounts API
const accountRoutes = require('./api/account');
app.use('/api/account', accountRoutes(app));

// Links API
const linkRoutes = require('./api/links');
app.use('/api/links', linkRoutes(app));

// Catchall route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on ' + (process.env.PORT || 3000));
});