var Schema = {
  users: {
    id: {type: 'increments', nullable: false, primary: true},
    email: {type: 'string', nullable: false, unique: true},
    name: {type: 'string', maxlength: 150, nullable: false}
  }
};
module.exports = Schema;
