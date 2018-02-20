exports.seed = function(knex, Promise) {
  return knex('favorite').del()
    .then(() => {
      return knex('favorite').insert([
        {id: 1, quote_id: 3, name: 'Amber', location: 'Denver, USA'},
        {id: 2, quote_id: 1, name: 'Fred', location: 'London, UK'},
        {id: 3, quote_id: 2, name: 'Voldemort', location: 'Tirana, Albania'}
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE favorite_id_seq RESTART WITH 4');
    });
};
