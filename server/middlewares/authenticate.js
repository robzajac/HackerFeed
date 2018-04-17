const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = app => function (req, res, next) {
  var token = req.body.token || req.query.token || req.headers['auth-token'];

  if (token) {
    jwt.verify(token, app.get('secret'), function (err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.',
        });
      } else {
        // If everything is good, save to request for use in other routes
        User.findOne({ _id: decoded.id }, function (err, user) {
          if (err) throw err;
          req.user = user;
          next();
        });
      }
    });
  } else {
    return res.status(403).json({
      success: false,
      message: 'No token provided',
    });
  }
};
