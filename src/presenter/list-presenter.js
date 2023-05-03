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
    this.listPoints = [...this.pointsModel.getPoints()];
    render(this.listPointComponent, this.listContainer);
    // render(new AddPointView(), this.listPointComponent.getElement());
    render(new EditPointView({point: this.listPoints[0]}), this.listPointComponent.getElement());
    for (let i = 0; i < this.listPoints.length; i++) {
      render(new PointView({point: this.listPoints[i]}), this.listPointComponent.getElement());
    }
  }
}
