const Bookshelf = require('../util/database')
const User      = require('../models/user')

var Request = Bookshelf.Model.extend({
  tableName: 'requests',

  hasTimestamps: true,

  user: function() {
    return this.belongsTo(User, 'user_id');
  }
})

module.exports = Request;
