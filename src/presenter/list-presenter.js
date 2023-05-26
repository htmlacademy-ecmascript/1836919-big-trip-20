import ListPointView from '../view/list-point-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
import NoPointView from '../view/no-point-view.js';
// import AddPointView from '../view/add-point-view.js';
import {render, replace} from '../framework/render.js';

export default class ListPresenter {
  #listContainer = null;
  #pointsModel = null;

  #listPointComponent = new ListPointView();

  #points = [];
  #destinations = [];
  #offers = [];

  constructor({listContainer, pointsModel}) {
    this.#listContainer = listContainer;
    this.#pointsModel = pointsModel;
  }

  init() {    
    this.#points = [...this.#pointsModel.points];
    this.#destinations = [...this.#pointsModel.destination];
    this.#offers = [...this.#pointsModel.offers];

    this.#renderList();
  }

  #renderList() {
    render(this.#listPointComponent, this.#listContainer);

    if(this.#points.length === 0) {
      render(new NoPointView(), this.#listPointComponent.element);
      return;
    }

    // render(new AddPointView(points[0], destinations, offers), this.listPointComponent.element);
    // render(new EditPointView(this.#points[0], this.#destinations, this.#offers), this.#listPointComponent.element);

    for (let i = 0; i < this.#points.length; i++) {
      // render(new PointView(this.#points[i], this.#destinations, this.#offers), this.#listPointComponent.element);
      this.#renderPoint(this.#points[i], this.#destinations, this.#offers);
    }
  }
  
  #renderPoint(point, destination, offer) {
    
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    }

    const pointComponent = new PointView(
      point, 
      destination, 
      offer, 
      {onEditClick: () =>  replacePointToForm()}
    );
    
    const pointEditComponent = new EditPointView(
      point, 
      destination, 
      offer, 
      {onFormClick: () => replaceFormToPoint()}
    )

    function replacePointToForm() {
      replace(pointEditComponent, pointComponent);
      document.addEventListener('keydown', escKeyDownHandler);
    }

    function replaceFormToPoint() {
      replace(pointComponent, pointEditComponent);
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    render(pointComponent, this.#listPointComponent.element);
  }
}
