const fs      = require('fs');
const Logger  = require('./log');

var config    = null;

fs.readFile('config.json', 'utf8', function(err, data) {
  if (err) {
    if (err.code == 'ENOENT')
      Logger.error('Unable to read file `config.json`');
    process.exit(-1);
  }

  try {
    config = JSON.parse(data);
  } catch (err) {
    Logger.error(err);
    process.exit(-1);
  }

  const configName = process.argv[2] || 'dev',
    configVars = config[configName],
    port = configVars.port,
    dbConfig = configVars.db;
})



module.exports = {
  port: port,
  dbConfig: dbConfig
}
