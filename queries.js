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
  deleteQuote(id) {},
  listFavorites() {
    return database('favorite');
  },
  readFavorite(id) {},
  createFavorite(favorite) {},
  updateFavorite(id, favorite) {},
  deleteFavorite(id) {}
};
