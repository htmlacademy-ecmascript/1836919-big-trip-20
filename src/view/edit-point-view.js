import AbstractView from '../framework/view/abstract-view.js';
import { travelingEventDate } from '../utils/utils.js';
import { TYPES, DATE_FORMAT } from '../const.js';

function createEditPointTemplate(points, destinations, offers) {

  const { basePrice, dateTo, dateFrom, type } = points;

  const pointDestination = destinations.find((dest) => points.destination === dest.id);
  const { pictures } = pointDestination;
  const typeOffers = offers.find((offer) => offer.type === type).offers;
  // const pointOffers = typeOffers.filter((off) => points.offers.includes(off.id));

  const createImageList = (arr) => arr.map((item) => `<img class="event__photo" src="${item.src}" alt="${item.description}">`).join('');
  const createPicturesList = createImageList(pictures);

  const dateSlashStart = travelingEventDate(dateFrom, DATE_FORMAT.FULL_DATETIME_SLASH);
  const dateSlashEnd = travelingEventDate(dateTo, DATE_FORMAT.FULL_DATETIME_SLASH);

  function createOffersTemplate() {
    const isChecked = (offer) => points.offers.includes(offer.id) ? 'checked' : '';
    return typeOffers.map((offer) =>
      `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden"
      id = "event-offer-${type}-${points.id}"
      type = "checkbox"
      name = "event-offer-${type}" ${isChecked(offer)}>
    <label class="event__offer-label" for="event-offer-${offer.id}-${points.id}">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </label>
    </input>
    </div>`).join('');
  }

  function createEventTypeItemTemplate() {
    return TYPES.map((pointType) =>
      `<div class="event__type-item">
      <input class="event__type-input  visually-hidden"
        id="event-type-${pointType}-${points.id}"
        type="radio"
        name="event-type"
        value="${pointType}"
        >
      <label class="event__type-label  event__type-label--${pointType}" for="event-type-${pointType}-${points.id}">${pointType.charAt(0).toUpperCase().concat(pointType.slice(1))}</label>
    </div>`).join('');
  }

  return (
    `<li class="trip-events__item">
        <form class="event event--edit" action="#" method="post">
            <header class="event__header">
            <div class="event__type-wrapper">
                <label class="event__type  event__type-btn" for="event-type-toggle-${points.id}">
                <span class="visually-hidden">Choose event type</span>
                <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                </label>
                <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${points.id}" type="checkbox">

                <div class="event__type-list">
                <fieldset class="event__type-group">
                    <legend class="visually-hidden">Event type</legend>
                    ${createEventTypeItemTemplate()}
                    </div>
                </fieldset>
                </div>
            </div>

            <div class="event__field-group  event__field-group--destination">
                <label class="event__label  event__type-output" for="event-destination-${points.id}">
                  ${type}
                </label>
                <input class="event__input  event__input--destination" id="event-destination-${points.id}" type="text" name="event-destination" value="${pointDestination.name}" list="destination-list-${points.id}">
                <datalist id="destination-list-${points.id}">
                  <option value="${pointDestination.name}">${pointDestination.name}</option>
                  <option value="${pointDestination.name}">${pointDestination.name}</option>
                  <option value="${pointDestination.name}">${pointDestination.name}</option>
                </datalist>
            </div>

            <div class="event__field-group  event__field-group--time">
                <label class="visually-hidden" for="event-start-time-${points.id}">From</label>
                <input class="event__input  event__input--time" id="event-start-time-${points.id}" type="text" name="event-start-time" value="${dateSlashStart}">
                &mdash;
                <label class="visually-hidden" for="event-end-time-${points.id}">To</label>
                <input class="event__input  event__input--time" id="event-end-time-${points.id}" type="text" name="event-end-time" value="${dateSlashEnd}">
            </div>

            <div class="event__field-group  event__field-group--price">
                <label class="event__label" for="event-price-${points.id}">
                <span class="visually-hidden">Price</span>
                &euro;
                </label>
                <input class="event__input  event__input--price" id="event-price-${points.id}" type="text" name="event-price" value="${basePrice}">
            </div>

            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
            <button class="event__reset-btn" type="reset">Delete</button>
            <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
            </button>
            </header>
            <section class="event__details">
              <section class="event__section  event__section--offers">
                  <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                  <div class="event__available-offers">
                  ${createOffersTemplate()}
                  </div>
              </section>

              <section class="event__section  event__section--destination">
                  <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                  <p class="event__destination-description">${pointDestination.description}</p>
                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                      ${createPicturesList}
                      </div>
                    </div>
              </section>
            </section>
        </form>
        </li>`
  );
}

export default class EditPointView extends AbstractView {
  #points = null;
  #destinations = null;
  #offers = null;
  #handleFormSubmit = null;


  constructor({points, destinations, offers, onFormClick}) {
    super();
    this.#points = points;
    this.#destinations = destinations;
    this.#offers = offers;

    this.#handleFormSubmit = onFormClick;

    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('form').addEventListener('reset', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formSubmitHandler);
  }

  get template() {
    return createEditPointTemplate(this.#points, this.#destinations, this.#offers);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit();
  };
}
