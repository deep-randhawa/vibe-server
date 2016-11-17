const Users   = require('../collections/users')
const User    = require('../models/user')
const Logger  = require('../util/log.js')
const Router  = require('express').Router();

Router
  .get('/', function(req, res, next) {
    Users.forge()
      .fetch()
      .then(function(collection) {
        res.json({error: false, data: collection.toJSON()});
      })
      .catch(function(err) {
        res.status(500).json({
          error: true,
          data: {
            message: err.message
          }
        })
      });

Router
  .post('/', function(req, res, next) {
    User.forge({
      SPOTIFY_ID: req.body.SPOTIFY_ID,
      FIRST_NAME: req.body.FIRST_NAME,
      LAST_NAME: req.body.LAST_NAME,
      EMAIL: req.body.EMAIL
    })
    .save()
    .then(function(user) {
      res.json({error: false, data: {id: user.get('id')}});
    })
    .catch(function(err) {
      res.status(500).json({error: true, data: {message: err.message}});
    })
  })
})

module.exports = Router
