import { getRandomInteger } from '../utils.js';
import { Price } from './const.js';

function generateOffer(type) {
  return {
    id: cripto.randomUUID(),
    title: `Offer ${type}`,
    price: getRandomInteger(Price.MIN, (Price.MAX / 10))
  };
}

export { generateOffer };