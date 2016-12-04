var Schema = {
  users: {
    id: {type: 'increments', nullable: false, primary: true},
    spotify_id: {type: 'string', nullable: false, unique: true},
    first_name: {type: 'string', maxlength: 150, nullable: false},
    last_name: {type: 'string', maxlength: 150, nullable: false},
    email: {type: 'string', maxlength: 150, nullable: false},
    created_at: {type: 'dateTime', nullable: false},
    updated_at: {type: 'dateTime', nullable: true}
  },
  requests: {
    id: {type: 'increments', nullable: false, primary: true},
    song_id: {type: 'string', nullable: false, unique: false},
    user_id: {type: 'integer', nullable: false, unsigned: true},
    num_votes: {type: 'integer', unsigned: true},
    song_name: {type: 'string', nullable: false},
    artist_name: {type: 'string', nullable: true},
    album_name: {type: 'string', nullable: true},
    created_at: {type: 'dateTime', nullable: false},
    updated_at: {type: 'dateTime', nullable: true}
  }
};
module.exports = Schema;
