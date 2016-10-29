const express     = require('express');
const path        = require('path');
const fs          = require('fs');
const db          = require('./models');
const body_parser = require('body-parser');
const http        = require('http');
const Logger      = require('./log');

const app         = express();

var config = null;

// read `config.json` for db details
fs.readFile('config.json', 'utf8', function (err, data) {
  if (err) {
    if (err.code == 'ENOENT')
      Logger.error('Unable to read file `config.json`');
    process.exit(-1);
  }

  try {
    config = JSON.parse(data);
  } catch (e) {
    Logger.error(e);
    process.exit(-1);
  }

  // config from `config.json` file
  const configName = process.argv[2] || 'dev',
    configVars = config[configName],
    port = configVars.port,
    dbConfig = configVars.db;

  // set up db connections
  db.init(dbConfig);

  // set up app params
  app.set('port', process.env.PORT || port);
  app.use(body_parser.json());
  app.use(body_parser.urlencoded({extended: 'false'}));


  // start the server
  http.createServer(app)
    .listen(app.get('port'), function() {
      Logger.info('express server listening on port: ' + app.get('port'));
    })
})
