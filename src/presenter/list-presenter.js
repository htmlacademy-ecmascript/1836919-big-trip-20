import TripSortView from '../view/trip-sort-view.js';
import ListPointView from '../view/list-point-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
// import AddPointView from '../view/add-point-view.js';
import {render} from '../render.js';

export default class ListPresenter {
  tripSortComponent = new TripSortView();
  listPointComponent = new ListPointView();

  constructor({listContainer, destinationsModel, offersModel, pointsModel}) {
    this.listContainer = listContainer;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
    this.pointsModel = pointsModel;
  }

  init() {
    render(this.tripSortComponent, this.listContainer);
    render(this.listPointComponent, this.listContainer);

    // render(new AddPointView(), this.listPointComponent.getElement());
    render(
      new EditPointView({
        point: this.points[0],
        pointDestinations: this.destinationsModel.get(),
        pointOffers: this.offersModel.get()
      }),
      this.listPointComponent.getElement()
    );

    this.points.forEach((point) => {
      render(
        new PointView({
          point,
          pointDestinations: this.destinationsModel.getById(point.destination),
          pointOffers: this.offersModel.getByType(point.type)
        }),
        this.listPointComponent.getElement()
      );
    });
  }
}
