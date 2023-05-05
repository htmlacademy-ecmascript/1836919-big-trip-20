import { getRandomValue } from '../utils.js';
import { CITIES, DESCRIPTION } from './const.js';

function generateDestination() {
  const city = getRandomValue(CITIES);

  return {
    id: cripto.randomUUID(),
    name: city,
    description: DESCRIPTION,
    pictures: [
      {
        'src': `https://loremflickr.com/300/200?random=${cripto.randomUUID()}`,
        'description': `${city} description`
      }
    ]
  };
}

export { generateDestination };