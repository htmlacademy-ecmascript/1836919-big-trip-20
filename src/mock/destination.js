import { getRandomInteger } from '../utils'; 

const mockDestination = [
  {
    id: 1,
    description: 'test desk 1',
    name: 'Omsk',
    pictures: [
      {
        src: `https://loremflickr.com/300/200?random=${getRandomInteger(1000, 1000)}`,
        description: `Omsk description`
      },
      {
        src: `https://loremflickr.com/300/200?random=${getRandomInteger(1000, 100000)}`,
        description: `Penza description`
      }
    ]
  },
  {
    id: 2,
    description: 'test desk 2',
    name: 'Moscow',
    pictures: [
      {
        src: `https://loremflickr.com/300/200?random=${getRandomInteger(1000, 100000)}`,
        description: `Moscow description`
      },
      {
        src: `https://loremflickr.com/300/200?random=${getRandomInteger(1000, 100000)}`,
        description: `Penza description`
      }
    ]
  },
  {
    id: 3,
    description: 'test desk 3',
    name: 'Norilsk',
    pictures: [
      {
        src: `https://loremflickr.com/300/200?random=${getRandomInteger(1000, 100000)}`,
        description: `Norilsk description`
      },
      {
        src: `https://loremflickr.com/300/200?random=${getRandomInteger(1000, 100000)}`,
        description: `Penza description`
      }
    ]
  },
  {
    id: 4,
    description: 'test desk 4',
    name: 'Penza',
    pictures: [
      {
        src: `https://loremflickr.com/300/200?random=${getRandomInteger(1000, 100000)}`,
        description: `Penza description`
      },
      {
        src: `https://loremflickr.com/300/200?random=${getRandomInteger(1000, 100000)}`,
        description: `Penza description`
      }
    ]
  },
];

export { mockDestination };
