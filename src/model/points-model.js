import { getRandomPoint } from '../mock/point.js';
import { mockOffers } from '../mock/offer.js';
import { mockDestination } from '../mock/destination.js';

const POINT_COUNT = 4;

export default class PointsModel {
  constructor() {
    this.points = Array.from({length: POINT_COUNT}, getRandomPoint);
    this.offers = mockOffers;
    this.destination = mockDestination;
  }

  getPoints () {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }

  getDestination() {
    return this.destination;
  }
}
