import { mockPoints } from '../mock/point.js';
import { mockOffers } from '../mock/offer.js';
import { mockDestination } from '../mock/destination.js';

export default class PointsModel {
  #points = null;
  #offers = null;
  #destinations = null;

  constructor() {
    this.#points = mockPoints;
    this.#offers = mockOffers;
    this.#destinations = mockDestination;
  }

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}
