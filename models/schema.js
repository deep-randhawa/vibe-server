var Schema = {
  users: {
    SPOTIFY_ID: {type: 'string', nullable: false, unique: true},
    FIRST_NAME: {type: 'string', nullable: false, unique: true},
    LAST_NAME: {type: 'string', maxlength: 150, nullable: false},
    EMAIL: {type: 'string', maxlength: 150, nullable: false}
  }
};
module.exports = Schema;
