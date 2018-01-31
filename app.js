const express = require('express');
const app = express();
const queries = require('./queries');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/quotes', (request, response) => {
  queries
    .listQuotes()
    .then(quotes => {
      response.json({quotes});
    })
    .catch(console.error);
});

app.get('/favorites', (request, response) => {
  queries
    .listFavorites()
    .then(favorites => {
      response.json({favorites});
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
