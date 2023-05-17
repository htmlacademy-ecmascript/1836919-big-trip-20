import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);
import {DATE_FORMAT, MSEC_IN_HOUR, MSEC_IN_DAY} from './const.js';

const humanizeTravelTime = function(dateFrom, dateTo) {
  const timeDiff = dayjs(dateTo).diff(dayjs(dateFrom));
  let pointDuration = 0;

  switch (true) {
    case (timeDiff >= MSEC_IN_DAY):
      pointDuration = dayjs.duration(timeDiff).format(DATE_FORMAT.FULL_COUNT);
      break;
    case (timeDiff >= MSEC_IN_HOUR):
      pointDuration = dayjs.duration(timeDiff).format(DATE_FORMAT.HOUR_MINUTES_COUNT);
      break;
    case (timeDiff < MSEC_IN_HOUR):
      pointDuration = dayjs.duration(timeDiff).format(DATE_FORMAT.MINUTES_COUNT);
      break;
  }
  return pointDuration;
};


function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

function getRandomArrayElement(items) {
  return items[getRandomInteger(0, items.length - 1)];
}

function travelingEventDate(date, format) {
  return date ? dayjs(date).format(format) : '';
}

export { getRandomInteger, getRandomArrayElement, travelingEventDate, humanizeTravelTime };
