const Users   = require('../collections/users.js')
const Logger  = require('../util/log.js')
const Router  = require('express').Router();

Router.get('/users', function(req, res, next) {
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
  })
})

module.exports = Router
