const Bookshelf = require('../util/database')
const User      = require('../models/user.js')
var Users = Bookshelf.Collection.extend({
  model: User
})

module.exports = Users;
