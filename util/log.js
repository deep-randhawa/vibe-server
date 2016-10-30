const Winston   = require('winston');
const Logger    = new (Winston.Logger)({
  transports: [
    new (Winston.transports.Console)({
      level: 'debug',
      handleExceptions: true,
      colorize: true
    })
  ]
});

module.exports = Logger;
