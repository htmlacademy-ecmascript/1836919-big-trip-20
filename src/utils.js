import dayjs from 'dayjs';
import { DATE_SHORT_FORMAT, DATE_FORMAT, TIME_DATE_FORMAT, DATE_FORMAT_SLASH } from './const';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function travelingEventShortDate(date) {
  return date ? dayjs(date).format(DATE_SHORT_FORMAT) : '';
}

function travelingEventDate(date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

function travelingEventTimeDate(date) {
  return date ? dayjs(date).format(TIME_DATE_FORMAT) : '';
}

function travelingEventDateSlash(date) {
  return date ? dayjs(date).format(DATE_FORMAT_SLASH) : '';
}

export { getRandomArrayElement, travelingEventShortDate, travelingEventDate, travelingEventDateSlash, travelingEventTimeDate };
