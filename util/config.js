module.exports = {
  "dev": {
    "port": 9000,
    "db": {
      "client": "pg",
      "host": "127.0.0.1",
      "database": "vibe_server_dev",
      "user": "deep",
      "password": "",
      "port": "5432",
      "charset": "utf8"
    }
  },
  "prod": {
    "port": 8080,
    "db": {
      "client": "pg",
      "host": "ec2-54-243-45-168.compute-1.amazonaws.com",
      "database": "d29khvhpqq759k",
      "user": "zllubghfwythxj",
      "password": "gR1pBCnjLJtB1upo9D4B72mtnD",
      "port": "5432",
      "charset": "utf8"
    }
  }
}
