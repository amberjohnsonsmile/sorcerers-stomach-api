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
          image: 'https://images.unsplash.com/photo-1511986484651-993497d7e3f1',
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
          image: 'https://images.unsplash.com/photo-1501675423372-9bfa95849e62',
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
            "Without warning, the scar on his forehead seared with pain again and his stomach churned horribly.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1471079688237-3ac9a55f1d6f',
          isReal: true
        },
        {
          id: 73,
          quote:
            "Harry wished all the teachers would stop doing this; he was starting to get an anxious, twisted feeling in his stomach every time he remembered how much homework he had to do, a feeling that worsened dramatically when Professor Sprout gave them yet another essay at the end of class.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1478641300939-0ec5188d3802',
          isReal: true
        },
        {
          id: 74,
          quote:
            "He also felt an odd, sick, empty feeling in his stomach that had nothing to do with tiredness and everything to do with the letter now curling blackly in the heart of the fire. ",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1447069387593-a5de0862481e',
          isReal: true
        },
        {
          id: 75,
          quote:
            "First came Neville with Dean and Lavender, who were closely followed by Parvati and Padma Patil with (Harry’s stomach did a back flip) Cho and one of her usually giggling girlfriends.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1476937619554-0f08b179a10c',
          isReal: true
        },
        {
          id: 76,
          quote:
            "“And that’s not to mention,” said Cho (Harry’s eyes snapped onto her, she was looking at him, smiling; his stomach did another somersault), “all the tasks he had to get through in the Triwizard Tournament last year — getting past dragons and merpeople and acromantulas and things....”",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1517672028475-9ad83dfa0e51',
          isReal: true
        },
        {
          id: 77,
          quote:
            "His scar had hurt... and he had had that odd feeling in his stomach... a strange, leaping feeling... a happy feeling.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1457131760772-7017c6180f05',
          isReal: true
        },
        {
          id: 78,
          quote:
            "“Harry’s leader,” said Cho at once, looking at Hermione as though she were mad, and Harry’s stomach did yet another back flip.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1495756426042-bae74e1fa11e',
          isReal: true
        },
        {
          id: 79,
          quote:
            "Harry saw Cho laughing and felt the familiar swooping sensation in his stomach, as though he had missed a step going downstairs.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1448035249594-10682f3c2db3',
          isReal: true
        },
        {
          id: 80,
          quote:
            "The thought made his stomach clench painfully.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1497044383938-c0486a41b655',
          isReal: true
        },
        {
          id: 81,
          quote:
            "His stomach was full of horrible hot, bubbling guilt.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1516491575772-bab9f75948c0',
          isReal: true
        },
        {
          id: 82,
          quote:
            "A leaden sensation was settling in the pit of his stomach.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1483564775855-5e57a5d569f2',
          isReal: true
        },
        {
          id: 83,
          quote:
            "Their glass might be shattered, but still the little black-and-white people inside them peered haughtily up at him, including — he felt a little jolt in his stomach — the dark, heavy-lidded woman whose trial he had witnessed in Dumbledore’s Pensieve: Bellatrix Lestrange.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1485075792961-9ea033ad04fc',
          isReal: true
        },
        {
          id: 84,
          quote:
            "“Oh,” said Harry as his stomach leapt uncomfortably. “Hi.”",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1474452926969-af7bfdb9ca39',
          isReal: true
        },
        {
          id: 85,
          quote:
            "Harry’s stomach gave an unpleasant lurch, but she did not look over at the Gryffindor table and sat down with her back to him.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1508558029785-6464fb34d3a1',
          isReal: true
        },
        {
          id: 86,
          quote:
            "Harry felt a horrible plummeting in his stomach.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1474575767135-14237cca19dc',
          isReal: true
        },
        {
          id: 87,
          quote:
            "Harry’s stomach turned over and his hand holding the teacup shook so that the cup rattled in its saucer.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1508014861016-f37cdf89e94d',
          isReal: true
        },
        {
          id: 88,
          quote:
            "His stomach gave a sickening jolt as he remembered that he had Occlumency the following evening....",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1500674425229-f692875b0ab7',
          isReal: true
        },
        {
          id: 89,
          quote:
            "Excitement exploded in the pit of his stomach: It was as though he was looking at himself but with deliberate mistakes.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1514876246314-d9a231ea21db',
          isReal: true
        },
        {
          id: 90,
          quote:
            "And two seats along from this girl — Harry’s stomach gave another pleasurable squirm — was Remus Lupin.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1510021115607-c94b84bceb1d',
          isReal: true
        },
        {
          id: 91,
          quote:
            "Nothing, except that the thought of taking this sensible course of action made him feel as though a lead weight had dropped into his stomach....",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1493690283958-32df2c86326e',
          isReal: true
        },
        {
          id: 92,
          quote:
            "“. . . Bradley . . . Davies . . . Chang,” he said, and Harry felt his stomach perform, less of a back flip, more a feeble lurch as Cho walked out onto the pitch, her shiny black hair rippling in the slight breeze.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1508697371770-529139794f8b',
          isReal: true
        },
        {
          id: 93,
          quote:
            "Harry’s stomach contracted with fear... with excitement....",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1496301780924-70b4cee59011',
          isReal: true
        },
        {
          id: 94,
          quote:
            "He had expected this, yet was not prepared for the molten wave of dread and panic that seemed to burst through his stomach floor at the sight of the deserted room.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
          isReal: true
        },
        {
          id: 95,
          quote:
            "Harry’s stomach gave a jolt.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1504466664756-1adbe6d13b36',
          isReal: true
        },
        {
          id: 96,
          quote:
            "The knot in Harry’s stomach tightened.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1451195090173-2e0781d7c33e',
          isReal: true
        },
        {
          id: 97,
          quote:
            "She walked away from him, and as he watched her go, he found that the terrible weight in his stomach seemed to have lessened slightly.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7',
          isReal: true
        },
        {
          id: 98,
          quote:
            "Harry felt a great jolt in his guts as though he had just missed a step going downstairs.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1489347215392-cee3b4f539aa',
          isReal: true
        },
        {
          id: 99,
          quote:
            "These furious thoughts whirled around in Harry’s head, and his insides writhed with anger as a sultry, velvety night fell around him, the air full of the smell of warm, dry grass and the only sound that of the low grumble of traffic on the road beyond the park railings.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1503525148566-ef5c2b9c93bd',
          isReal: true
        },
        {
          id: 100,
          quote:
            "He cast around for a topic to change the subject from Dumbledore — the very thought of him made Harry’s insides burn with anger again.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1511792411104-ccfdd048bd9a',
          isReal: true
        },
        {
          id: 101,
          quote:
            "Fear jabbed at his insides like needles as he wondered what was going to happen to him if he was expelled.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1452032821564-0f802617a6a1',
          isReal: true
        },
        {
          id: 102,
          quote:
            "His insides were squirming.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1516747773440-e114ee0d3c07',
          isReal: true
        },
        {
          id: 103,
          quote:
            "His insides seemed to shrivel with embarrassment.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1442473483905-95eb436675f1',
          isReal: true
        },
        {
          id: 104,
          quote:
            "Harry’s insides reinflated so rapidly he felt as though he might actually float a few inches off the dropping-strewn floor.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1433838552652-f9a46b332c40',
          isReal: true
        },
        {
          id: 105,
          quote:
            "His insides were pulsing with rage.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1487241281672-301e0f542588',
          isReal: true
        },
        {
          id: 106,
          quote:
            "“— and Alicia passes back to Angelina!” Lee shouted, and as Harry swerved, his insides boiling at what he had just heard, he knew Lee was trying to drown out the sound of the singing.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1515127784137-a16d5217257f',
          isReal: true
        },
        {
          id: 107,
          quote:
            "And then a truly terrible thought occurred to him, a memory bobbing to the surface of his mind, one that made his insides writhe and squirm like serpents....",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1513362191612-dc4ae788e4c3',
          isReal: true
        },
        {
          id: 108,
          quote:
            "He turned over onto his other side and after a while dropped back off to sleep, waking much later in the early hours of the morning, with his insides aching with hunger, and Ron snoring in the next bed.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1506224477000-07aa8a76be20',
          isReal: true
        },
        {
          id: 109,
          quote:
            "Harry had the horrible sensation that his insides were melting.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1470422703728-ef495b7a172d',
          isReal: true
        },
        {
          id: 110,
          quote:
            "In the second or so it took for him to take in what she had said, Harry’s insides had become glacial.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1482093378251-82b99034041a',
          isReal: true
        },
        {
          id: 111,
          quote:
            "Harry’s insides plummeted sickeningly.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1459891373124-d2ab1e3ed58e',
          isReal: true
        },
        {
          id: 112,
          quote:
            "Harry felt the white-hot anger lick his insides, blazing in the terrible emptiness, filling him with the desire to hurt Dumbledore for his calmness and his empty words.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1489275960192-edc747009a6e',
          isReal: true
        },
        {
          id: 113,
          quote:
            "Harry felt a great jolt in his guts as though he had just missed a step going downstairs.",
          source: 'Harry Potter and the Order of the Phoenix',
          image:
            'https://images.unsplash.com/photo-1473772564351-202a22a93101',
          isReal: true
        },
        {
          id: 114,
          quote:
            "Harry’s stomach squirmed. He wished he had eaten less breakfast.",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1455853739633-8c94c03d8121',
          isReal: true
        },
        {
          id: 115,
          quote:
            "He had known all along that he wouldn’t, but he still felt a sinking in his stomach as he looked again at that small black E.",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/reserve/uZYSV4nuQeyq64azfVIn_15130980706_64134efc6e_o.jpg',
          isReal: true
        },
        {
          id: 116,
          quote:
            "“— the ice-cream place in Diagon Alley?” Harry interrupted, with an unpleasant, hollow sensation in the pit of his stomach.",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1507750549272-e58742b1df80',
          isReal: true
        },
        {
          id: 117,
          quote:
            "The smell of roast beef made Harry’s stomach ache with hunger, but they had barely taken three steps toward the Gryffindor table when Professor Slughorn appeared in front of them, blocking their path.",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1514214144664-c28b328245e2',
          isReal: true
        },
        {
          id: 118,
          quote:
            "It was as though something large and scaly erupted into life in Harry’s stomach, clawing at his insides: Hot blood seemed to flood his brain, so that all thought was extinguished, replaced by a savage urge to jinx Dean into a jelly.",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1451486242265-24b0c0ef9a51',
          isReal: true
        },
        {
          id: 119,
          quote:
            "Harry’s stomach turned over.",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1501707193650-e839d612aad6',
          isReal: true
        },
        {
          id: 120,
          quote:
            "But next moment, his stomach seemed to drop out of the sky — Smith was right and Harry was wrong: Harper had not sped upward at random; he had spotted what Harry had not: The Snitch was speeding along high above them, glinting brightly against the clear blue sky.",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1465173904241-1f101f249d97',
          isReal: true
        },
        {
          id: 121,
          quote:
            "She patted him on the arm; Harry felt a swooping sensation in his stomach, but then she walked off to help herself to more butterbeer.",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb',
          isReal: true
        },
        {
          id: 122,
          quote:
            "Harry felt anger bubbling in the pit of his stomach: So Dolores Umbridge was still at the Ministry, was she?",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1442600678244-fc0253be6acb',
          isReal: true
        },
        {
          id: 123,
          quote:
            "Finally, a hollow feeling in his stomach and the knowledge that Ron and Hermione would soon be back for lunch made him abandon the attempt and leave the corridor to Malfoy who, hopefully, would be too afraid to leave for some hours to come.",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1493512939369-16a5dd091dfd',
          isReal: true
        },
        {
          id: 124,
          quote:
            "Would he tell Slughorn — Harry’s stomach churned — how Harry had been achieving such good results in Potions all year?",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1502571021998-c562c753aedc',
          isReal: true
        },
        {
          id: 125,
          quote:
            "It was, as Harry had anticipated, useless, boring work, punctuated (as Snape had clearly planned) with the regular jolt in the stomach that meant he had just read his father or Sirius’s names, usually coupled together in various petty misdeeds, occasionally accompanied by those of Remus Lupin and Peter Pettigrew.",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1463527882365-18201e85a091',
          isReal: true
        },
        {
          id: 126,
          quote:
            "Harry’s stomach started rumbling when the clock showed half past twelve.",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/19/clock.JPG',
          isReal: true
        },
        {
          id: 127,
          quote:
            "Harry felt a searing pain in his stomach at the sound of the name.",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1512713627743-69aac2e905b4',
          isReal: true
        },
        {
          id: 128,
          quote:
            "Harry dropped his gaze to his treacle tart, his insides burning again.",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81',
          isReal: true
        },
        {
          id: 129,
          quote:
            "Harry took a deep breath and continued calmly, though his insides were boiling, “Yeah, ghosts are transparent, but Inferi are dead bodies, aren’t they? So they’d be solid —”",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1503847526538-824483d02f15',
          isReal: true
        },
        {
          id: 130,
          quote:
            "Harry thought there was a rather knowing look in her eye as she told him that, but she could not possibly know that his insides were suddenly dancing the conga.",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            'https://images.unsplash.com/photo-1482575832494-771f74bf6857',
          isReal: true
        },
        {
          id: 131,
          quote:
            "",
          source: 'Harry Potter and the Half-Blood Prince',
          image:
            '',
          isReal: true
        },
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE quote_id_seq RESTART WITH 132');
    });
};
