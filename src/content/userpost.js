const posts = [
  {
    id: 'post1',
    tag: 'section-1',
    time: '2023-07-03T01:39:49',
    user: {
      name: 'Sam Curan',
      img: 'https://source.unsplash.com/random/100x100?man,employee',
    },
    post: {
      media: '',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ipsa aut! Inventore unde architecto, nihil impedit error totam mollitia  quibusdam nam, exercitationem beatae autem? Quidem est pariatur eveniet facere odit magnam fugiat quos ad quia eum sint consectetur.',
      caption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellendus!',
    },
    actions: { likes: 2000, comments: 1000, views: 3000 },
  },
  {
    id: 'post2',
    tag: 'section-2',
    time: '2023-07-02T21:39:49',
    user: {
      name: 'Salini Kumari',
      img: 'https://source.unsplash.com/random/100x100?female,woman,girl',
    },
    post: {
      media:
        'https://source.unsplash.com/random/1000x600?scenery,landscape,nature,space,sea,ocean,water',
      caption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellendus!',
    },
    actions: { likes: 2000, comments: 1000, views: 3000 },
  },
  {
    id: 'post3',
    tag: 'section-3',
    time: '2023-07-02T19:39:38',
    user: {
      name: 'Rohit Kumar',
      img: 'https://source.unsplash.com/random/100x100?indian,american,person,man',
    },
    post: {
      media: '',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ipsa aut! Inventore unde architecto',
      caption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellendus!',
    },

    actions: { likes: 2000, comments: 1000, views: 5000 },
  },
];

export default posts;
