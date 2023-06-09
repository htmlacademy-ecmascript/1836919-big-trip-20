import ListPointView from '../view/list-point-view.js';
import NoPointView from '../view/no-point-view.js';
import SortView from '../view/sort-view.js';
// import AddPointView from '../view/add-point-view.js';
import { RenderPosition, render } from '../framework/render.js';
import PointPresenter from './point-presenter.js';
import { updateItem } from '../utils/common.js';
import { sortByDay, sortByTime, sortByPrice } from '../utils/utils.js';
import { SortType } from '../const.js';

export default class ListPresenter {
  #boardContainer = null;
  #pointsModel = null;

  #listPointComponent = new ListPointView();
  #noPointComponent = new NoPointView();
  #sortComponent = null;

  #points = [];
  #destinations = [];
  #offers = [];
  #pointPresenters = new Map();

  constructor({ boardContainer, pointsModel }) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#destinations = [...this.#pointsModel.destinations];
    this.#offers = [...this.#pointsModel.offers];

    this.#renderList();
  }

  #handleSortTypeChange = (sortType) => {
    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderPointList();
  };

  #sortPoints(sortType) {
    switch (sortType) {
      case SortType.TIME:
        this.#points.sort(sortByTime);
        break;
      case SortType.PRICE:
        this.#points.sort(sortByPrice);
        break;
      default:
        this.#points.sort(sortByDay);
    }

  }

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#listPointComponent.element, RenderPosition.AFTERBEGIN);
  }

  #renderPoint(points, destinations, offers) {

    const pointPresenter = new PointPresenter({
      pointListContainer: this.#listPointComponent.element,
      destinations,
      offers,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange
    });

    pointPresenter.init(points);
    this.#pointPresenters.set(points.id, pointPresenter);
  }

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatePoint) => {
    this.#points = updateItem(this.#points, updatePoint);
    this.#pointPresenters.get(updatePoint.id).init(updatePoint);
  };

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

    if (this.#points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderSort();
    this.#renderPointList();
  }
}
