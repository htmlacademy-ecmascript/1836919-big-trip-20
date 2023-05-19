import ListPointView from '../view/list-point-view.js';
// import BtnRollupView from '../view/btn-rollup-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
// import AddPointView from '../view/add-point-view.js';
import {render, remove} from '../framework/render.js';

export default class ListPresenter {
  #listContainer = null;
  // #tripEvent = null;
  #pointsModel = null;

  #listPointComponent = new ListPointView();
  // #tripEventComponent = new BtnRollupView();

  #points = [];
  #destinations = [];
  #offers = [];

  constructor({listContainer, pointsModel}) {
    this.#listContainer = listContainer;
    // this.#tripEvent = tripEvent;
    this.#pointsModel = pointsModel;
  }

  init() {
    render(this.#listPointComponent, this.#listContainer);
    // render(this.#tripEventComponent, this.#tripEvent);
    this.#points = [...this.#pointsModel.points];
    this.#destinations = [...this.#pointsModel.destination];
    this.#offers = [...this.#pointsModel.offers];
    // render(new AddPointView(points[0], destinations, offers), this.listPointComponent.element);
    // render(new EditPointView(this.#points[0], this.#destinations, this.#offers), this.#listPointComponent.element);

    for (let i = 0; i < this.#points.length; i++) {
      // render(new PointView(this.#points[i], this.#destinations, this.#offers), this.#listPointComponent.element);
      this.#renderPoint(this.#points[i], this.#destinations, this.#offers);
    }
  }

  #renderPoint(point, destination, offer) {
    const pointComponent = new PointView(point, destination, offer);

    render(pointComponent, this.#listPointComponent.element);
  }
}
