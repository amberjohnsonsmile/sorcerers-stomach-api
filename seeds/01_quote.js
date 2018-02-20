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
            "Harry’s insides did a horrible somersault.",
          source: 'Harry Potter and the Chamber of Secrets',
          image:
            'https://images.unsplash.com/photo-1512408937761-ab688c0008bc',
          isReal: true
        },
        {
          id: 23,
          quote:
            "Harry’s stomach gave a funny jolt.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1501602883426-b7e5237587b4',
          isReal: true
        },
        {
          id: 24,
          quote:
            "A feeling of great gloom in his stomach, Harry pulled the door open.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1494791368093-85217fbbf8de',
          isReal: true
        },
        {
          id: 25,
          quote:
            "She jerked her head at Harry, who felt his stomach clench.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1475868530036-7e1f42b9c91c',
          isReal: true
        },
        {
          id: 26,
          quote:
            "His stomach churned as he fell back to wondering what was going to happen to him, and whether the Dursleys had managed to get Aunt Marge off the ceiling yet.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1487615215796-62477c922fa5',
          isReal: true
        },
        {
          id: 27,
          quote:
            "Harry looked up at the owner of the hand on his shoulder and felt a bucketful of ice cascade into his stomach — he had walked right into Cornelius Fudge, the Minister of Magic himself.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1511699969499-46229c53fc12',
          isReal: true
        },
        {
          id: 28,
          quote:
            "Harry’s eyes darted downward, and what he saw made his stomach contract.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1470162415307-7ed32bad0a5a',
          isReal: true
        },
        {
          id: 29,
          quote:
            "Harry’s stomach lurched.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1502035458144-454aa46b8ee0',
          isReal: true
        },
        {
          id: 30,
          quote:
            "“Right,” he said, trying to recall as exactly as possible the wonderful, soaring sensation of his stomach.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1422132940975-a71d3ffef351',
          isReal: true
        },
        {
          id: 31,
          quote:
            "Harry’s stomach turned over — Dumbledore would know exactly what had happened, if Malfoy said anything.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1512685076844-4161e436c4f5',
          isReal: true
        },
        {
          id: 32,
          quote:
            "Harry was sitting with Ron and Hermione, removed from the center of things, trying not to think about the next day, because every time he did, he had the horrible sensation that something very large was fighting to get out of his stomach.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1508454868649-abc39873d8bf',
          isReal: true
        },
        {
          id: 33,
          quote:
            "“Yeah...,” said Harry, his stomach writhing.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1501645285-fe34b236a8ab',
          isReal: true
        },
        {
          id: 34,
          quote:
            "Harry felt as though the bottom had dropped out of his stomach.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee',
          isReal: true
        },
        {
          id: 35,
          quote:
            "Some sort of explosion took place in the pit of Harry’s stomach.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1514854148010-54ed5354ca86',
          isReal: true
        },
        {
          id: 36,
          quote:
            "It was as though freezing water were rising in his chest, cutting at his insides.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1488227402652-00175718582c',
          isReal: true
        },
        {
          id: 37,
          quote:
            "Harry’s insides lurched.",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1492232093388-4d9d123d362d',
          isReal: true
        },
        {
          id: 38,
          quote:
            "He spun around, the familiar, icy cold penetrating his insides, fog starting to obscure his vision; more were appearing out of the darkness on every side; they were encircling them....",
          source: 'Harry Potter and the Prisoner of Azkaban',
          image:
            'https://images.unsplash.com/photo-1504252060324-1c76e2e09939',
          isReal: true
        },
        {
          id: 39,
          quote:
            "Harry felt as though an ice cube had slipped down into his stomach at the very thought....",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1497382227533-202dc91e6c14',
          isReal: true
        },
        {
          id: 40,
          quote:
            "“Yeah, I know,” said Harry, but there was a leaden feeling in his stomach as he looked out of the window at the Hedwig-free sky.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1489093990898-aa81d43f910b',
          isReal: true
        },
        {
          id: 41,
          quote:
            "Trying to ignore the sinking feeling of disappointment in his stomach, Harry returned to his porridge.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1502209524164-acea936639a2',
          isReal: true
        },
        {
          id: 42,
          quote:
            "Harry watched her fly out of sight with the familiar feeling of unease back in his stomach.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1482376297902-a54c222cec2b',
          isReal: true
        },
        {
          id: 43,
          quote:
            "The article had appeared ten days ago, and Harry still got a sick, burning feeling of shame in his stomach every time he thought about it.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1509991837233-9a46f4ee019b',
          isReal: true
        },
        {
          id: 44,
          quote:
            "As he said it, his stomach flooded with a wave of molten panic.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1513841942364-0aada93e7a7d',
          isReal: true
        },
        {
          id: 45,
          quote:
            "Harry turned to look at her and his stomach gave a weird lurch as though he had missed a step going downstairs.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1500488867305-5ed02944918f',
          isReal: true
        },
        {
          id: 46,
          quote:
            "And so the first day of the new term arrived, and Harry set off to lessons, weighed down with books, parchment, and quills as usual, but also with the lurking worry of the egg heavy in his stomach, as though he were carrying that around with him too.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3',
          isReal: true
        },
        {
          id: 47,
          quote:
            "But he suddenly realized what he was saying, and he felt the excitement drain out of him as though someone had just pulled a plug in his stomach.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1507833421144-4a33437fea3e',
          isReal: true
        },
        {
          id: 48,
          quote:
            "Ron and Hermione stared at Harry, who felt his stomach drop.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1516313382985-1c2d86ad0907',
          isReal: true
        },
        {
          id: 49,
          quote:
            "A large, dead weight seemed to fall through Harry’s chest into his stomach.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1493690283958-32df2c86326e',
          isReal: true
        },
        {
          id: 50,
          quote:
            "Harry’s stomach leapt — he was now tying for first place with Cedric",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1495572195357-1c8d6b84bc52',
          isReal: true
        },
        {
          id: 51,
          quote:
            "Harry’s stomach slipped several notches.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1506432499555-221afc0fa13a',
          isReal: true
        },
        {
          id: 52,
          quote:
            "The phoenix let out one soft, quavering note. It shivered in the air, and Harry felt as though a drop of hot liquid had slipped down his throat into his stomach, warming him, and strengthening him.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1500217421378-106080ccb99e',
          isReal: true
        },
        {
          id: 53,
          quote:
            "Harry felt a chill in his stomach as Professor McGonagall struggled to find words to describe what had happened.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1508630410394-5e1604f9901f',
          isReal: true
        },
        {
          id: 54,
          quote:
            "Harry felt a hot, sick swoop of anger in his stomach.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1511993294592-4d1d416697a3',
          isReal: true
        },
        {
          id: 55,
          quote:
            "His insides squirmed uncomfortably as he spoke.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1516747773440-e114ee0d3c07',
          isReal: true
        },
        {
          id: 56,
          quote:
            "Harry’s insides seemed to curl up and shrivel.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1513010127920-653a6edc095b',
          isReal: true
        },
        {
          id: 57,
          quote:
            "It was odd; a moment before his insides had been writhing like snakes, but suddenly he didn’t seem to have any insides at all.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1511594148306-949a8d8f551d',
          isReal: true
        },
        {
          id: 58,
          quote:
            "His insides had come back again. It felt as though they had been filled with lead in their absence.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1414342952040-4c09ded92ce9',
          isReal: true
        },
        {
          id: 59,
          quote:
            "Harry’s insides gave a guilty squirm, but he ignored them.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1484808188706-407756e94c6e',
          isReal: true
        },
        {
          id: 60,
          quote:
            "He repressed a shudder at the thought of what might come spilling out of his mouth if Snape did it... quite apart from landing a whole lot of people in trouble — Hermione and Dobby for a start — there were all the other things he was concealing... like the fact that he was in contact with Sirius... and — his insides squirmed at the thought — how he felt about Cho....",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1428894976381-853e04af6262',
          isReal: true
        },
        {
          id: 61,
          quote:
            "Harry’s insides went cold.",
          source: 'Harry Potter and the Goblet of Fire',
          image:
            'https://images.unsplash.com/photo-1496340077100-9573d8b77463',
          isReal: true
        },
        {
          id: 62,
          quote:
            "The opening notes of the music that heralded the seven o’clock news reached Harry’s ears and his stomach turned over.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1471478331149-c72f17e33c73',
          isReal: true
        },
        {
          id: 63,
          quote:
            "Outside in the flower bed, Harry’s stomach seemed to unclench.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1496861083958-175bb1bd5702',
          isReal: true
        },
        {
          id: 64,
          quote:
            "Harry felt a dull, sinking sensation in his stomach and, before he knew it, the feeling of hopelessness that had plagued him all summer rolled over him once again.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1495427513693-3f40da04b3fd',
          isReal: true
        },
        {
          id: 65,
          quote:
            "“What d’you mean?” Harry said again, but there was a cold, plunging sensation in his stomach.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1512331716563-b1942ff334b5',
          isReal: true
        },
        {
          id: 66,
          quote:
            "His stomach turned over.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1496317556649-f930d733eea3',
          isReal: true
        },
        {
          id: 67,
          quote:
            "Harry felt as though his stomach had sunk through the dusty carpet.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1516420053114-7df614f5e7d4',
          isReal: true
        },
        {
          id: 68,
          quote:
            "He felt as though a brick had dropped into his stomach when Mrs. Weasley turned to him during dinner on Wednesday evening and said quietly, “I’ve ironed your best clothes for tomorrow morning, Harry, and I want you to wash your hair tonight too. A good first impression can work wonders.”",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1456083334823-6e5bc7132162',
          isReal: true
        },
        {
          id: 69,
          quote:
            "Harry felt a horrible sinking in the pit of his stomach.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1505556154861-5caf6c4cb36a',
          isReal: true
        },
        {
          id: 70,
          quote:
            "Standing where the twins had left him with nothing but a guilty weight in the pit of his stomach for company, Harry caught the sound of his own name.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1487180144351-b8472da7d491',
          isReal: true
        },
        {
          id: 71,
          quote:
            "Harry’s stomach, already uncomfortable, clenched as he looked at Alice Longbottom; he knew her round, friendly face very well, even though he had never met her, because she was the image of her son, Neville.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/uploads/141155339325423394b24/03982423',
          isReal: true
        },
        {
          id: 72,
          quote:
            "",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            '',
          isReal: true
        },
        {
          id: 72,
          quote:
            "",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            '',
          isReal: true
        },
        {
          id: 73,
          quote:
            "",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            '',
          isReal: true
        },
        {
          id: 74,
          quote:
            "",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            '',
          isReal: true
        },
        {
          id: 75,
          quote:
            "",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            '',
          isReal: true
        },
        {
          id: 76,
          quote:
            "",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            '',
          isReal: true
        },
        {
          id: 77,
          quote:
            "",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            '',
          isReal: true
        },
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE quote_id_seq RESTART WITH 77');
    });
};
