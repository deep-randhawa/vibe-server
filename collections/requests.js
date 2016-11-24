const Bookshelf = require('../util/database');
const Request   = require('../models/request.js');
var Requests = Bookshelf.Collection.extend({
  model: Request
})

module.exports = Requests;
