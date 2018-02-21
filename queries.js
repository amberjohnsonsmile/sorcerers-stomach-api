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
  listComments() {
    return database('comment');
  },
  readComment(id) {
    return database('comment')
      .where('id', id)
      .first();
  },
  createComment(comment) {
    return database('comment')
      .insert(comment)
      .returning('*')
      .then(record => record[0]);
  },
  updateComment(id, comment) {
    return database('comment')
      .update(comment)
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  deleteComment(id) {
    return database('comment')
      .where('id', id)
      .del();
  },
  readQuoteComments(id) {
    return database('comment')
      .join('quote', 'quote.id', '=', 'comment.quote_id')
      .select(
        'comment.quote_id',
        'comment.id',
        'comment.name',
        'comment.comment',
        'quote.quote',
        'quote.source',
        'quote.isReal'
      )
      .where('quote.id', id)
      .returning('*');
  }
};
