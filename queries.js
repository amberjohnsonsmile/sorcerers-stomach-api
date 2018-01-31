const database = require('./database-connection');

module.exports = {
  listQuotes() {
    return database('quote');
  },
  readQuote(id) {
    return database('quote')
      .where('id', id)
      .first();
  },
  createQuote(quote) {
    return database('quote')
      .insert(quote)
      .returning('*')
      .then(record => record[0]);
  },
  updateQuote(id, quote) {
    return database('quote')
      .update(quote)
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  deleteQuote(id) {
    return database('quote')
      .where('id', id)
      .del();
  },
  listFavorites() {
    return database('favorite');
  },
  readFavorite(id) {
    return database('favorite')
      .where('id', id)
      .first();
  },
  createFavorite(favorite) {
    return database('favorite')
      .insert(favorite)
      .returning('*')
      .then(record => record[0]);
  },
  updateFavorite(id, favorite) {
    return database('favorite')
      .update(favorite)
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  deleteFavorite(id) {
    return database('favorite')
      .where('id', id)
      .del();
  }
};
