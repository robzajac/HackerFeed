const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
  const accountRoutes = express.Router();

  accountRoutes.post('/signup', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    User.addUser(username, password)
      .then((user) => {
        var payload = {
          id: user._id,
        };
        var token = jwt.sign(payload, app.get('secret'));
        res.json({ success: true, token: token });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: 'There was an error registering you',
        });
      });
  });

  accountRoutes.post('/signin', (req, res) => {
    User.findOne({ username: req.body.username })
      .then((user) => {
        if (!user) {
          res.json({ success: false, message: 'Auth failed, user not found' });
        } else {
          return User.check(req.body.username, req.body.password)
            .then((valid) => {
              if (!valid) {
                res.json({
                  success: false,
                  message: 'Auth failed, wrong pass',
                });
              } else {
                var payload = {
                  id: user._id,
                };
                var token = jwt.sign(payload, app.get('secret'));
                res.json({
                  success: true,
                  message: 'Authentication successful',
                  token: token,
                });
              }
            });
        }
      })
      .catch((err) => {
        res.json({ success: false, message: 'Auth failed, no user' });
      });
  });

  return accountRoutes;
};
