const database = require('./database-connection');

module.exports = {
  listQuotes() {
    return database('quote');
  },
  listFavorites() {
    return database('favorite');
  }
};
