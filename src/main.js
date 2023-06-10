import InfoView from './view/info-view.js';
import FilterView from './view/filter-view.js';

import { render, RenderPosition } from './framework/render.js';
import ListPresenter from './presenter/list-presenter.js';
import PointsModel from './model/points-model.js';
import { generateFilter } from './mock/filter.js';

const siteBodyElement = document.querySelector('.page-body');
const siteTripEventsElement = siteBodyElement.querySelector('.trip-events');
const siteTripInfoElement = siteBodyElement.querySelector('.trip-main');
const siteTripFilterElement = siteBodyElement.querySelector('.trip-controls__filters');

const pointsModel = new PointsModel();

const listPresenter = new ListPresenter({
  boardContainer: siteTripEventsElement,
  pointsModel
});

const filters = generateFilter(pointsModel.points);

render(new InfoView(), siteTripInfoElement, RenderPosition.AFTERBEGIN);
render(new FilterView({ filters }), siteTripFilterElement);


listPresenter.init();
