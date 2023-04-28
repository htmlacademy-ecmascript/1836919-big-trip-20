import ListEventView from '../view/list-event-view.js';
import EventView from '../view/event-view.js';
import EditEventView from '../view/edit-event-view.js';
// import AddEventView from '../view/add-event-view.js';
import {render} from '../render.js';

export default class ListPresenter {
  listEventComponent = new ListEventView();

  constructor({listContainer}) {
    this.listContainer = listContainer;
  }

  init() {
    render(this.listEventComponent, this.listContainer);
    // render(new AddEventView(), this.listEventComponent.getElement());
    render(new EditEventView(), this.listEventComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.listEventComponent.getElement());
    }
  }
}
