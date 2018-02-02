exports.seed = function(knex, Promise) {
  return knex('quote').del()
    .then(() => {
      return knex('quote').insert([
        {id: 1, quote: 'Harry felt as though the bottom had dropped out of his stomach.', source: "Harry Potter and the Sorcerer's Stone", image: 'https://images.unsplash.com/photo-1516456712953-ba42cc070398', isReal: true},
        {id: 2, quote: "Harry's stomach lurched with nerves and Ron, he saw, looked pale under his freckles.", source: "Harry Potter and the Sorcerer's Stone", image: 'https://images.unsplash.com/photo-1512058018310-a9de86049752', isReal: true},
        {id: 3, quote: 'Harry felt as though his insides had turned to ice.', source: "Harry Potter and the Sorcerer's Stone", image: 'https://images.unsplash.com/photo-1516456712953-ba42cc070398', isReal: true},
        {id: 4, quote: 'He shivered and turned over, trying to get comfortable, his stomach rumbling with hunger.', source: "Harry Potter and the Sorcerer's Stone", image: 'https://images.unsplash.com/photo-1516456712953-ba42cc070398', isReal: true},
        {id: 5, quote: "His stomach twisted as he imagined it, watching Ron and the others becoming wizards, while he stumped around the grounds carrying Hagrid's bag.", source: "Harry Potter and the Sorcerer's Stone", image: 'https://images.unsplash.com/photo-1451994860973-8f9242f631b50', isReal: true}
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE quote_id_seq RESTART WITH 7')
    });
};
