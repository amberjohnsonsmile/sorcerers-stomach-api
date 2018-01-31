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

app.get('/quotes/:id', (request, response) => {
  queries
    .readQuote(request.params.id)
    .then(quote => {
      quote ? response.json({quote}) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post('/quotes', (request, response) => {
  queries
    .createQuote(request.body)
    .then(quote => {
      response.status(201).json({quote});
    })
    .catch(console.error);
});

app.put('/quotes/:id', (request, response) => {
  queries
    .updateQuote(request.params.id, request.body)
    .then(quote => {
      response.json({quote});
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
