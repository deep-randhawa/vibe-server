const Users   = require('../collections/users');
const User    = require('../models/user');
const Logger  = require('../util/log.js');
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

Router.get('/:id', function(req, res, next) {
  User.forge({id: req.params.id})
    .fetch()
    .then(function(user) {
      if (!user) {
        res.status(404)
          .json('Unable to find user w/ id=' + req.params.id);
      } else {
        res.json(user.toJSON());
      }
    })
    .catch(function(err) {
      res.status(500).json({
        message: err.message
      })
    })
});


Router.post('/', function(req, res, next) {
  User.forge({
    spotify_id    : req.body.spotify_id,
    first_name    : req.body.first_name,
    last_name     : req.body.last_name,
    email         : req.body.email
  })
  .save()
  .then(function(user) {
    res.json({
      id          : user.get('id'),
      first_name  : user.get('first_name'),
      last_name   : user.get('last_name'),
      email       : user.get('email'),
      spotify_id  : user.get('spotify_id')
    })
  })
  .catch(function(err) {
    res.status(500).json({
      message: err.message
    })
  });
});


Router.put('/:id', function(req, res, next) {
  User.forge({id: req.params.id})
    .fetch({require: true})
    .then(function(user) {
      user.save({
        first_name  : req.body.first_name || user.get('first_name'),
        last_name   : req.body.last_name || user.get('last_name'),
        email       : req.body.email || user.get('email')
      })
      .then(function() {
        res.json('User details updated');
      })
      .catch(function(err) {
        res.status(500).json({
          message: err.message
        })
      });
    })
    .catch(function(err) {
      res.status(500).json({
        message: err.message
      })
    })
});

Router.delete('/:id', function(req, res, next) {
  User.forge({id: req.params.id})
    .fetch({require: true})
    .then(function(user) {
      user.destroy()
      .then(function() {
        res.json('User successfully deleted');
      })
      .catch(function(err) {
        res.status(500).json({
          message: err.message
        })
      })
    })
    .catch(function(err) {
      res.status(500).json({
        message: err.message
      })
    });
});

module.exports = Router
