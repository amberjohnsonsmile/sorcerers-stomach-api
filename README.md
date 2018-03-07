# Harry Potter and the Sorcerer's Stomach

This is the API of quotes and comments for Harry Potter and the Sorcerer's Stomach. Check out the frontend code [here](https://github.com/amberjohnsonsmile/sorcerers-stomach)!

Explore quotes about Harry Potter's stomach from all seven Harry Potter books, and even add your own! This full stack app includes the ability to view and add quotes as well as comment on them.

[Visit site](https://hpstomach.firebaseapp.com/)

![screenshot](https://user-images.githubusercontent.com/31632938/36686881-18c4a552-1ae5-11e8-9af1-bf170e7f9d44.png)

## Technologies
* Ember
* Node.js
* Express.js
* Knex.js
* Stripe Checkout
* Cypress
* Heroku
* Firebase

## Local Installation Instructions
If you would like to run the server locally, follow these steps:

1. Create a fork of this repo

1. Clone it to your local machine

1. Navigate to the new folder on the command line and run `npm install`

1. Run `npm run dev`

1. Visit the API in your web browser at localhost:3000 with the following endpoints:
* GET
  * /quotes - lists all quotes
  * /quotes/:id - reads a quote with matching id
  * /comments - lists all comments
  * /comments/:id - reads a comment with matching id
  * /quote-comments/:id - lists associated comments for a given quote id
* POST
  * /quotes - creates a quote
  * /comments - creates a comment
* PUT
  * /quotes/:id - updates quote with matching id
  * /comments/:id - updates comment with matching id
* DELETE
  * /quotes/:id - deletes quote with matching id
  * /comments/:id - deletes comment with matching id


## Contact

Amber Johnson, Full Stack Web Developer

![headshot](https://user-images.githubusercontent.com/31632938/36687590-517de15e-1ae7-11e8-8753-5c28cefd5e69.jpeg)
* Email amberjohnsonsmile@gmail.com
* Portfolio [amberjohnsonsmile.co](https://amberjohnsonsmile.co)
* GitHub [@amberjohnsonsmile](https://github.com/amberjohnsonsmile)
* LinkedIn [@amberjohnsonsmile](https://linkedin.com/in/amberjohnsonsmile)

## License

MIT
