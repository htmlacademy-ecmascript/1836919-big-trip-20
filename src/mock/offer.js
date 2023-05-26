import { getRandomInteger } from '../utils/common.js';

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 0,
        title: 'taxi Test 1',
        price: getRandomInteger(1, 100)
      },
      {
        id: 1,
        title: 'taxi Test 2',
        price: getRandomInteger(1, 100)
      },
      {
        id: 2,
        title: 'taxi Test 3',
        price: getRandomInteger(1, 100)
      },
      {
        id: 3,
        title: 'taxi Test 4',
        price: getRandomInteger(1, 100)
      },
      {
        id: 4,
        title: 'taxi Test 5',
        price: getRandomInteger(1, 100)
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 0,
        title: 'bus Test 1',
        price: getRandomInteger(1, 100)
      },
      {
        id: 1,
        title: 'bus Test 2',
        price: getRandomInteger(1, 100)
      },
      {
        id: 2,
        title: 'bus Test 3',
        price: getRandomInteger(1, 100)
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 0,
        title: 'train Test 1',
        price: getRandomInteger(1, 100)
      },
      {
        id: 1,
        title: 'train Test 2',
        price: getRandomInteger(1, 100)
      },
      {
        id: 2,
        title: 'train Test 3',
        price: getRandomInteger(1, 100)
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 0,
        title: 'flight Test 1',
        price: getRandomInteger(1, 100)
      },
      {
        id: 1,
        title: 'flight Test 2',
        price: getRandomInteger(1, 100)
      },
      {
        id: 2,
        title: 'flight Test 3',
        price: getRandomInteger(1, 100)
      },
      {
        id: 3,
        title: 'flight Test 4',
        price: getRandomInteger(1, 100)
      },
      {
        id: 4,
        title: 'flight Test 5',
        price: getRandomInteger(1, 100)
      },
      {
        id: 5,
        title: 'flight Test 6',
        price: getRandomInteger(1, 100)
      }
    ]
  }
];

function findOfferByType(type) {
  return mockOffers.find((el) => el.type === type);
}

export { findOfferByType, mockOffers };
