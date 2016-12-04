const Requests  = require('../collections/requests');
const Request   = require('../models/request');
const Logger    = require('../util/log.js');
const Router    = require('express').Router();

Router.get('/:user_id', function(req, res, next) {
  Requests.forge()
    .query('where', {'user_id': req.params.user_id})
    .fetch({require: true})
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
  console.log(req.body);
  Request.forge({
    song_id       : req.body.song_id,
    user_id       : req.body.user_id,
    num_votes     : req.body.num_votes || 0,
    song_name     : req.body.song_name,
    artist_name   : req.body.artist_name,
    album_name    : req.body.album_name
  })
  .save()
  .then(function(request) {
    res.json({
      id          : request.get('id'),
      song_id     : request.get('song_id'),
      user_id     : request.get('user_id'),
      num_votes   : request.get('num_votes'),
      song_name   : request.get('song_name'),
      artist_name : request.get('artist_name'),
      album_name  : request.get('album_name')
    })
  })
  .catch(function(err) {
    console.log(err);
    res.status(500).json({
      message: err.message
    })
  })
});

Router.delete('/:user_id', function(req, res, next) {
  Request.forge()
    .query('where', {'user_id': req.params.user_id})
    .fetch()
    .delete()
    .then(function() {
      res.send("OK");
    })
    .catch(function(err) {
      res.status(200).json({
        message: err.message
      })
    })
})

module.exports = Router
