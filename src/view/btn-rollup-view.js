import AbstractView from '../framework/view/abstract-view.js';

function createBtnRollupTemplate() {
  return (
    ` 
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
    `
  );
}

export default class BtnRollupView extends AbstractView {
  get template() {
    return createBtnRollupTemplate();
  }
}
