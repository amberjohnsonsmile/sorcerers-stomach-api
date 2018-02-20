exports.seed = function(knex, Promise) {
  return knex('comment').del()
    .then(() => {
      return knex('comment').insert([
        {id: 1, quote_id: 3, name: 'Amber', comment: 'Harry sure has a lot of stomach problems. Love this quote'},
        {id: 2, quote_id: 1, name: 'Fred', comment: 'Potter needs to stop complaining about his stomach. At least he is ALIVE'},
        {id: 3, quote_id: 2, name: 'Voldemort', comment: 'As far as I am concerned Harry can go and get stomach cancer'}
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE comment_id_seq RESTART WITH 4');
    });
};
