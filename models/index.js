var knex, bookshelf;
var db = {};

var init = function (config, callback) {
  knex = require('knex')({
    client: config.client,
    connection: config
  });
  bookshelf = require('bookshelf')(knex);
}

module.exports = {
  bookshelf: bookshelf,
  init: init,
  db: db
};
