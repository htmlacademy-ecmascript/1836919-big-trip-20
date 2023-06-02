import ListPointView from '../view/list-point-view.js';
import NoPointView from '../view/no-point-view.js';
// import AddPointView from '../view/add-point-view.js';
import {RenderPosition, render} from '../framework/render.js';
import PointPresenter from './point-presenter.js';

export default class ListPresenter {
  #boardContainer = null;
  #pointsModel = null;

  #listPointComponent = new ListPointView();
  #noPointComponent = new NoPointView();

  #points = [];
  #destinations = [];
  #offers = [];

  constructor({boardContainer, pointsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#destinations = [...this.#pointsModel.destinations];
    this.#offers = [...this.#pointsModel.offers];

    this.#renderList();
  }

  #renderPoint(points, destinations, offers) {

    const pointPresenter = new PointPresenter({
      pointListContainer: this.#listPointComponent.element,
      destinations,
      offers
    });

    pointPresenter.init(points, destinations, offers);
  }

  #renderNoPoints() {
    render(this.#noPointComponent, this.#listPointComponent.element, RenderPosition.AFTERBEGIN);
  }

  #renderPointList() {
    // render(new AddPointView(points[0], destinations, offers), this.listPointComponent.element);
    // render(new EditPointView(this.#points[0], this.#destinations, this.#offers), this.#listPointComponent.element);
    for (let i = 0; i < this.#points.length; i++) {
      // render(new PointView(this.#points[i], this.#destinations, this.#offers), this.#listPointComponent.element);
      this.#renderPoint(this.#points[i], this.#destinations, this.#offers);
    }
  }

  #renderList() {
    render(this.#listPointComponent, this.#boardContainer);

    if(this.#points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderPointList();
  }
}
