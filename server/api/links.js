const router = require('express').Router();
const isAuthenticated = require('../middlewares/authenticate');
const User = require('../models/user');


module.exports = function (app) {
  // Check user is logged in
  router.use(isAuthenticated(app));

  router.get('/getlinks', function (req, res) {
    // TODO get saved links for a user
  });

  
  router.post('/addlink', function (req, res) {
    // TODO add link for the user
  });

  return router;
};
