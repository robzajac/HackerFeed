const router = require('express').Router();
const isAuthenticated = require('../middlewares/authenticate');
const User = require('../models/user');


module.exports = function (app) {
  // Check user is logged in
  router.use(isAuthenticated(app));

  router.get('/getlinks', function (req, res) {
    User.getLinks(req.user._id)
      .then((links) => {
        res.json({ res: 'success', data: links });
      })
      .catch((err) => {
        res.json({ res: 'failure', data: err });
      });
  });

  
  router.post('/addlink', function (req, res) {
    User.getLinks(req.user._id)
      .then((links) => {
        // Check for containment
        if (links.indexOf(req.body.link) < 0) {
          User.addLink(req.user._id, req.body.link)
          .then((user) => {
            res.json({ res: 'success', data: user.links });
          })
          .catch((err) => {
            res.json({ res: 'failure', data: err });
          });
        } else {
          res.json({ res: 'failure', data: 'Link already saved'});
        }
      });
  });

  return router;
};
