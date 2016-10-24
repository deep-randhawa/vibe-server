const express     = require('express');
const path        = require('path');
const fs          = require('fs');
const db          = require('./models');
const body_parser = require('body-parser');
const http = require('http');
const Winston     = require('winston');

const app = express();

var config = null;

// winston logger
const logger = new (Winston.Logger)({
  transports: [
    new (Winston.transports.Console)({
      level: 'debug',
      handleExceptions: true,
      colorize: true
    })
  ]
});

fs.readFile('config.json', 'utf8', function (err, data) {
  if (err) {
    if (err.code == 'ENOENT')
      Winston.error('Unable to read file `config.json`');
    process.exit(-1);
  }

  try {
    config = JSON.parse(data);
  } catch (e) {
    Winston.error(e);
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
      Winston.info('express server listening on port: ' + app.get('port'));
    })
})
