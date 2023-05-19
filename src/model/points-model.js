import { getRandomPoint } from '../mock/point.js';
import { mockOffers } from '../mock/offer.js';
import { mockDestination } from '../mock/destination.js';

const POINT_COUNT = 4;

export default class PointsModel {
  #points = null;
  #offers = null;
  #destination = null;

  constructor() {
    this.#points = Array.from({length: POINT_COUNT}, getRandomPoint);
    this.#offers = mockOffers;
    this.#destination = mockDestination;
  }

  get points () {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destination() {
    return this. #destination;
  }
}
