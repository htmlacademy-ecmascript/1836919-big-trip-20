import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import {render, RenderPosition} from './render.js';
import ListPresenter from './presenter/list-presenter.js';

const siteBodyElement = document.querySelector('.page-body');
const siteHeaderElement = siteBodyElement.querySelector('.page-header');
const siteTripMainElement = siteHeaderElement.querySelector('.trip-main');
const siteTripFilterElement = siteTripMainElement.querySelector('.trip-controls__filters');

const siteMainElement = siteBodyElement.querySelector('.page-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');

const listPresenter = new ListPresenter({listContainer: siteTripEventsElement});

render(new TripInfoView(), siteTripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), siteTripFilterElement);
render(new SortView(), siteTripEventsElement);

listPresenter.init();
