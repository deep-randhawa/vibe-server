const Bookshelf = require('../util/database')
const Request   = require('../models/request')

var User = Bookshelf.Model.extend({
  tableName: 'users',

  hasTimestamps: true,

  requests: function() {
    return this.hasMany(Request, 'user_id');
  }
})

module.exports = User;
