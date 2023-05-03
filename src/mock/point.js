import { getRandomArrayElement } from '../utils';
import { TYPES } from '../const';

const mocPoints = [
  {
    basePrice: 1100,
    dateFrom: new Date('2023-06-23T22:55:56.845Z'),
    dateTo: new Date('2023-06-23T22:55:56.845Z'),
    destination: 'Армавир',
    isFavorite: true,
    offers: [
      'Order Uber',
      'Add luggage',
    ],
    type: getRandomArrayElement(TYPES),
  },
  {
    basePrice: 1100,
    dateFrom: new Date('2023-06-23T22:55:56.845Z'),
    dateTo: new Date('2023-06-23T11:22:13.375Z'),
    destination: 'Армавир',
    isFavorite: false,
    offers: [
      'Order Uber',
      'Add luggage',
    ],
    type: getRandomArrayElement(TYPES),
  },
  {
    basePrice: 110,
    dateFrom: new Date('2023-01-02T22:55:56.845Z'),
    dateTo: new Date('2023-06-23T11:22:13.375Z'),
    destination: 'Армавир',
    isFavorite: false,
    offers: [
      'Order Uber',
      'Add luggage',
    ],
    type: getRandomArrayElement(TYPES),
  },
  {
    basePrice: 1100,
    dateFrom: new Date('2023-04-13T22:55:56.845Z'),
    dateTo: new Date('2023-06-23T11:22:13.375Z'),
    destination: 'Армавир',
    isFavorite: false,
    offers: [
      'Order Uber',
      'Add luggage',
    ],
    type: getRandomArrayElement(TYPES),
  },
];

function getRandomPoint() {
  return getRandomArrayElement(mocPoints);
}

export {getRandomPoint};
