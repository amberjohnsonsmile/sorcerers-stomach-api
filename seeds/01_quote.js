exports.seed = function(knex, Promise) {
  return knex('quote')
    .del()
    .then(() => {
      return knex('quote').insert([
        {
          id: 1,
          quote:
            'Harry felt as though the bottom had dropped out of his stomach.',
          source: "Harry Potter and the Sorcerer's Stone",
          image: 'https://images.unsplash.com/photo-1516456712953-ba42cc070398',
          isReal: true
        },
        {
          id: 2,
          quote:
            "Harry's stomach lurched with nerves and Ron, he saw, looked pale under his freckles.",
          source: "Harry Potter and the Sorcerer's Stone",
          image: 'https://images.unsplash.com/photo-1512058018310-a9de86049752',
          isReal: true
        },
        {
          id: 3,
          quote: 'Harry felt as though his insides had turned to ice.',
          source: "Harry Potter and the Sorcerer's Stone",
          image: 'https://images.unsplash.com/photo-1516456712953-ba42cc070398',
          isReal: true
        },
        {
          id: 4,
          quote:
            'He shivered and turned over, trying to get comfortable, his stomach rumbling with hunger.',
          source: "Harry Potter and the Sorcerer's Stone",
          image: 'https://images.unsplash.com/photo-1516456712953-ba42cc070398',
          isReal: true
        },
        {
          id: 5,
          quote:
            "His stomach twisted as he imagined it, watching Ron and the others becoming wizards, while he stumped around the grounds carrying Hagrid's bag.",
          source: "Harry Potter and the Sorcerer's Stone",
          image:
            'https://images.unsplash.com/photo-1451994860973-8f9242f631b50',
          isReal: true
        },
        {
          id: 6,
          quote:
            'He missed Hogwarts so much it was like having a constant stomachache.',
          source: 'Harry Potter and the Chamber of Secrets',
          image: 'https://images.unsplash.com/photo-1514981184024-f7fea649f6ed',
          isReal: true
        },
        {
          id: 7,
          quote:
            'Mouth dry, stomach lurching, Harry sprang after him, trying not to make a sound.',
          source: 'Harry Potter and the Chamber of Secrets',
          image: 'https://images.unsplash.com/photo-1484954635941-a258d3bf783e',
          isReal: true
        },
        {
          id: 8,
          quote:
            'Harry ran up the hall into the kitchen and felt his stomach disappear.',
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1514424350208-755887f7b374',
          isReal: true
        },
        {
          id: 9,
          quote:
            'Exhausted, stomach rumbling, mind spinning over the same unanswerable questions, Harry fell into an uneasy sleep.',
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1483919213033-a1b8428e6021',
          isReal: true
        },
        {
          id: 10,
          quote:
            'Harry looked up at the giant clock with a sickening feeling in the pit of his stomach.',
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1447372116807-90372ebee0d0',
          isReal: true
        },
        {
          id: 11,
          quote:
            'Harry felt as though he’d just been walloped in the stomach by one of the mad tree’s larger branches.',
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1501084291732-13b1ba8f0ebc',
          isReal: true
        },
        {
          id: 12,
          quote: 'His stomach had just dropped unpleasantly.',
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1493810353548-4cdea49dea74',
          isReal: true
        },
        {
          id: 13,
          quote:
            '“That I’m Slytherin’s heir, I expect,” said Harry, his stomach dropping another inch or so as he suddenly remembered the way Justin Finch-Fletchley had run away from him at lunchtime.',
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1508188317434-1fd219bb636f',
          isReal: true
        },
        {
          id: 14,
          quote: 'Harry’s stomach gave a horrible lurch.',
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1508874805800-f31ad741d419',
          isReal: true
        },
        {
          id: 15,
          quote:
            'He turned to squint at what he’d fallen over and felt as though his stomach had dissolved.',
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1508485727887-96c8978f433c',
          isReal: true
        },
        {
          id: 16,
          quote: 'Harry’s stomach plummeted.',
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1475566373789-bc82997775b9',
          isReal: true
        },
        {
          id: 17,
          quote:
            'Immediately, his insides started writhing as though he’d just swallowed live snakes — doubled up, he wondered whether he was going to be sick — then a burning sensation spread rapidly from his stomach to the very ends of his fingers and toes.',
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1509062549095-c3513d7df10a',
          isReal: true
        },
        {
          id: 18,
          quote:
            'More than once, with a jolt of the stomach, he thought he saw one stir.',
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1504644708628-9c1dd99f497f',
          isReal: true
        },
        {
          id: 19,
          quote:
            'Harry, whose insides were aching with hunger, jumped off his bed and seized it.',
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1505484032327-1eebe7ee48d2',
          isReal: true
        },
        {
          id: 20,
          quote: 'His insides were burning with guilt.',
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1481660148723-b77ee9184660',
          isReal: true
        },
        {
          id: 21,
          quote:
            'After half an hour of lying there with his insides churning, he got up, dressed, and went down to breakfast early, where he found the rest of the Gryffindor team huddled at the long, empty table, all looking uptight and not speaking much.',
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1504113888839-1c8eb50233d3',
          isReal: true
        },
        {
          id: 22,
          quote:
            "",
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            '',
          isReal: true
        },
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE quote_id_seq RESTART WITH 100');
    });
};
