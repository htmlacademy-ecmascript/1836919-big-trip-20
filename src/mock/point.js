import { getRandomArrayElement, getRandomInteger } from '../utils/common.js';

export const mockPoints = [
  {
    'id': 1,
    'basePrice': getRandomInteger(101, 1000),
    'dateFrom': '2023-04-11T22:00:00',
    'dateTo': '2023-04-14T23:00:00',
    'destination': 1,
    'isFavorite': true,
    'offers': [0, 1, 2],
    'type': 'taxi',
  },
  {
    'id': 2,
    'basePrice': getRandomInteger(101, 1000),
    'dateFrom': '2023-04-13T22:00:00',
    'dateTo': '2023-04-15T23:00:00',
    'destination': 2,
    'isFavorite': false,
    'offers': [0, 1, 2],
    'type': 'bus',
  },
  {
    'id': 3,
    'basePrice': getRandomInteger(101, 1000),
    'dateFrom': '2022-04-13T19:00:00',
    'dateTo': '2022-04-14T23:00:00',
    'destination': 3,
    'isFavorite': false,
    'offers': [0, 1, 2],
    'type': 'train',
  },
  {
    'id': 4,
    'basePrice': getRandomInteger(101, 1000),
    'dateFrom': '2023-04-13T22:00:00',
    'dateTo': '2024-04-14T23:00:00',
    'destination': 4,
    'isFavorite': false,
    'offers': [0, 1, 2, 3],
    'type': 'flight',
  },
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
