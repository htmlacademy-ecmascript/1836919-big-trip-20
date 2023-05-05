import { getRandomInteger } from '../utils.js';
import { getDate } from './utils.js';
import { Price } from './const.js';

function generatePoint(type, destinationId, offerIds) {
  return {
    id: cripto.randomUUID(),
    basePrice: getRandomInteger(Price.MIN, Price.MAX),
    dateFrom: getDate({next: false}),
    dateTo: getDate({next: false}),
    destination: destinationId,
    isFavorite: !!getRandomInteger(0, 1),
    offers: offerIds,
    type
  };
}

export {generatePoint};
