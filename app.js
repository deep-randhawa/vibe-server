const express       = require('express');
const path          = require('path');
const fs            = require('fs');
const body_parser   = require('body-parser');
const http          = require('http');
const Logger        = require('./util/log');

const app           = express();

// routes
const routes        = require('./routes/index')
const user          = require('./routes/user')
const request       = require('./routes/request')

// get `config.json` params
const configName    = process.argv[2] || 'dev';
const port          = require('./util/config')[configName].port;

// set up app params
app.set('port', process.env.PORT || port);
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: 'false'}));

// set up routes
app.use('/', routes);
app.use('/user', user);
app.use('/request', request);

// start the server
http.createServer(app)
  .listen(app.get('port'), function() {
    Logger.info('express server listening on port: ' + app.get('port'));
});
