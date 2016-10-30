const express = require('express');
const Router  = express.Router();

Router.get('/', function(req, res, next) {
  res.type('json');
  res.send('Welcome to vibe-server.\nSend appropriate request to corresponding data.');
})

module.exports = Router;
