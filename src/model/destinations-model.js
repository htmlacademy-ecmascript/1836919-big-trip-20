import { mockDestination } from '../mock/destination.js';

export default class DestinationsModel {
  allDestination = mockDestination;

  getDestination() {
    return this.allDestination;
  }
}
