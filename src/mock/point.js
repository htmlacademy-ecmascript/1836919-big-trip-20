import { nanoid } from 'nanoid';
import { getRandomInteger } from '../utils/common.js';

export const mockPoints = [
  {
    'id': nanoid(),
    'basePrice': getRandomInteger(101, 1000),
    'dateFrom': '2019-04-09T01:00:00',
    'dateTo': '2019-05-10T02:00:00',
    'destination': 1,
    'isFavorite': false,
    'offers': [0, 1, 2],
    'type': 'taxi',
  },
  {
    'id': nanoid(),
    'basePrice': getRandomInteger(101, 1000),
    'dateFrom': '2020-04-11T03:00:00',
    'dateTo': '2020-05-12T05:00:00',
    'destination': 2,
    'isFavorite': false,
    'offers': [0, 1, 2],
    'type': 'bus',
  },
  {
    'id': nanoid(),
    'basePrice': getRandomInteger(101, 1000),
    'dateFrom': '2022-04-13T06:00:00',
    'dateTo': '2022-05-14T09:00:00',
    'destination': 3,
    'isFavorite': false,
    'offers': [0, 1, 2],
    'type': 'train',
  },
  {
    'id': nanoid(),
    'basePrice': getRandomInteger(101, 1000),
    'dateFrom': '2023-04-15T10:00:00',
    'dateTo': '2023-05-16T14:00:00',
    'destination': 4,
    'isFavorite': false,
    'offers': [0, 1, 2, 3],
    'type': 'flight',
  },
];
