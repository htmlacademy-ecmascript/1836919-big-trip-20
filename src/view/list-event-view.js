import { createElement } from '../render.js';

function createListEventTemplate() {
  return (
    `
    <ul class="trip-events__list"></ul>
    `
  );
}

export default class FilterView {
  getTemplate() {
    return createListEventTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
