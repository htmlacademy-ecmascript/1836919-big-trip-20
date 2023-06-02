import {render, replace, remove} from '../framework/render.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';

export default class PointPresenter {
  #pointListContainer = null;

  #pointComponent = null;
  #pointEditComponent = null;

  #points = null;
  #destinations = null;
  #offers = null;

  constructor({pointListContainer, destinations, offers}) {
    this.#pointListContainer = pointListContainer;

    this.#destinations = destinations;
    this.#offers = offers;
  }

  init(points) {
    this.#points = points;

    const prePointComponent = this.#pointComponent;
    const prePointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new PointView({
      points: this.#points,
      destinations: this.#destinations,
      offers: this.#offers,
      onEditClick: this.#handleEditClick,
    });

    this.#pointEditComponent = new EditPointView({
      points: this.#points,
      destinations: this.#destinations,
      offers: this.#offers,
      onFormClick: this.#handleFormSubmit,
    });

    if (prePointComponent === null || prePointEditComponent === null) {
      render(this.#pointComponent, this.#pointListContainer);
      return;
    }

    if (this.#pointListContainer.contains(prePointComponent.element)) {
      replace(this.#pointComponent, prePointComponent);
    }

    if (this.#pointListContainer.contains(prePointEditComponent.element)) {
      replace(this.#pointEditComponent, prePointEditComponent);
    }

    remove(prePointComponent);
    remove(prePointEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  #replacePointToForm() {
    document.addEventListener('keydown', this.#escKeyDownHandler);
    replace(this.#pointEditComponent, this.#pointComponent);
  }

  #replaceFormToPoint() {
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    replace(this.#pointComponent, this.#pointEditComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
  };
}
