const mongoose = require('mongoose');
const config = require('../config/config');

const { host, port, name } = config.db;

mongoose.connect(`mongodb://${host}:${port}/${name}`);

const db = mongoose.connection;
db.once('open', () => {
  console.log('connected to mongodb instance');
});

module.exports = mongoose;