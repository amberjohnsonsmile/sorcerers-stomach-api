exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', table => {
    table.increments('id').primary();
    table.integer('quote_id');
    table.text('name');
    table.text('comment');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comment');
};
