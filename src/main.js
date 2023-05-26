import TripInfoView from './view/trip-info-view.js';
import TripFilterView from './view/trip-filter-view.js';
import TripSortView from './view/trip-sort-view.js';
import { render, RenderPosition } from './framework/render.js';
import ListPresenter from './presenter/list-presenter.js';
import PointsModel from './model/points-model.js';
import { generateFilter } from './mock/filter.js';

const siteBodyElement = document.querySelector('.page-body');
const siteTripInfoElement = siteBodyElement.querySelector('.trip-main');
const siteTripFilterElement = siteBodyElement.querySelector('.trip-controls__filters');
const siteTripSortEventsElement = siteBodyElement.querySelector('.trip-events');

const pointsModel = new PointsModel();

const listPresenter = new ListPresenter({
  listContainer: siteTripSortEventsElement,
  pointsModel
});

const filters = generateFilter(pointsModel.points);

render(new TripInfoView(), siteTripInfoElement, RenderPosition.AFTERBEGIN);
render(new TripFilterView({filters}), siteTripFilterElement);
render(new TripSortView(), siteTripSortEventsElement);

listPresenter.init();
