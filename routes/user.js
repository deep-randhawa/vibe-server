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
      name: req.body.name,
      email: req.body.email
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
