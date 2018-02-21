const express = require('express');
const app = express();
const queries = require('./queries');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

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
      quote ? response.json({quote}) : response.sendStatus(418);
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

app.delete('/quotes/:id', (request, response) => {
  queries
    .deleteQuote(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.get('/comments', (request, response) => {
  queries
    .listComments()
    .then(comments => {
      response.json({comments});
    })
    .catch(console.error);
});

app.get('/comments/:id', (request, response) => {
  queries
    .readComment(request.params.id)
    .then(comment => {
      comment ? response.json({comment}) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post('/comments', (request, response) => {
  queries
    .createComment(request.body)
    .then(comment => {
      response.status(201).json({comment});
    })
    .catch(console.error);
});

app.put('/comments/:id', (request, response) => {
  queries
    .updateComment(request.params.id, request.body)
    .then(comment => {
      response.json({comment});
    })
    .catch(console.error);
});

app.delete('/comments/:id', (request, response) => {
  queries
    .deleteComment(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.get('/quote-comments/:id', (request, response) => {
  queries
    .readQuoteComments(request.params.id)
    .then(quoteComments => {
      response.json({quoteComments})
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.sendStatus(418);
});

module.exports = app;
