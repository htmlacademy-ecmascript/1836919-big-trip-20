import TripInfoView from './view/trip-info-view.js';
import TripFilterView from './view/trip-filter-view.js';
import ListPresenter from './presenter/list-presenter.js';

import {render, RenderPosition} from './render.js';

import MockService from './service/mock-service.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';

const siteBodyElement = document.querySelector('.page-body');
const siteTripInfoElement = siteBodyElement.querySelector('.trip-main');
const siteTripFilterElement = siteBodyElement.querySelector('.trip-controls__filters');
const siteTripEventsElement = siteBodyElement.querySelector('.trip-events');

const mockService = new MockService();
const destinationsModel = new DestinationsModel(mockService);
const offersModel = new OffersModel(mockService)
const pointsModel = new PointsModel(mockService);

const listPresenter = new ListPresenter({
  listContainer: siteTripEventsElement,
  destinationsModel,
  offersModel,
  pointsModel,
});

render(new TripInfoView(), siteTripInfoElement, RenderPosition.AFTERBEGIN);
render(new TripFilterView(), siteTripFilterElement);
render(new TripSortView(), siteTripSortEventsElement);

listPresenter.init();
