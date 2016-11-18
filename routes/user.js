const Users   = require('../collections/users')
const User    = require('../models/user')
const Logger  = require('../util/log.js')
const Router  = require('express').Router();

Router.get('/', function(req, res, next) {
  Users.forge()
    .fetch()
    .then(function(collection) {
      res.json(collection.toJSON());
    })
    .catch(function(err) {
      res.status(500).json({
        message: err.message
      })
    })
});

Router.post('/', function(req, res, next) {
  User.forge({
    spotify_id: req.body.spotify_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  })
  .save()
  .then(function(user) {
    res.json({
      id: user.get('id')
    })
  })
  .catch(function(err) {
    console.log(err)
    res.status(500).json({
      message: err.message
    })
  });
});

module.exports = Router
