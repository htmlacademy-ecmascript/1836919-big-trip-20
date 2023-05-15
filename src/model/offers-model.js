import { mockOffers, findOfferByType } from '../mock/offer.js';

export default class OffersModel {
  allOffers = mockOffers;

  getOffers() {
    return this.allOffers;
  }
}
