const Bookshelf = require('../util/database')

var User = Bookshelf.Model.extend({
  tableName: 'users'
})

module.exports = Bookshelf.model('User', User);
