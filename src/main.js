import InfoPointView from './view/info-point-view.js';
import FilterPointView from './view/filter-point-view.js';
import SortPointView from './view/sort-point-view.js';
import {render, RenderPosition} from './render.js';
import ListPresenter from './presenter/list-presenter.js';
import PointsModel from './model/points-model.js';

const siteBodyElement = document.querySelector('.page-body');
const siteHeaderElement = siteBodyElement.querySelector('.page-header');
const siteTripMainElement = siteHeaderElement.querySelector('.trip-main');
const siteTripFilterElement = siteTripMainElement.querySelector('.trip-controls__filters');

const siteMainElement = siteBodyElement.querySelector('.page-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');

const pointsModel = new PointsModel();
const listPresenter = new ListPresenter({
  listContainer: siteTripEventsElement,
  pointsModel,
});

render(new InfoPointView(), siteTripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterPointView(), siteTripFilterElement);
render(new SortPointView(), siteTripEventsElement);

listPresenter.init();
