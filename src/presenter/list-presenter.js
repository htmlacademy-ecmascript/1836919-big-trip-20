import ListPointView from '../view/list-point-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
// import AddPointView from '../view/add-point-view.js';
import {render} from '../render.js';

export default class ListPresenter {
  listPointComponent = new ListPointView();

  constructor({listContainer, pointsModel}) {
    this.listContainer = listContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    render(this.listPointComponent, this.listContainer);
    const points = this.pointsModel.getPoints();
    const destinations = this.pointsModel.getDestination();
    const offers = this.pointsModel.getOffers();
    // render(new AddPointView(points[0], destinations, offers), this.listPointComponent.getElement());
    render(new EditPointView(points[0], destinations, offers), this.listPointComponent.getElement());
    for (const point of points) {
      render(new PointView(point, destinations, offers), this.listPointComponent.getElement());
    }
  }
}
