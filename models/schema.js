var Schema = {
  users: {
    id: {type: 'increments', nullable: false, primary: true},
    spotify_id: {type: 'string', nullable: false, unique: true},
    first_name: {type: 'string', maxlength: 150, nullable: false},
    last_name: {type: 'string', maxlength: 150, nullable: false},
    email: {type: 'string', maxlength: 150, nullable: false}
  }
};
module.exports = Schema;
