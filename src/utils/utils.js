import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);
import { DATE_FORMAT, MSEC_IN_HOUR, MSEC_IN_DAY } from '../const.js';

const humanizeTravelTime = function (dateFrom, dateTo) {
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

function travelingEventDate(date, format) {
  return date ? dayjs(date).format(format) : '';
}

function isPointFuture(point) {
  return dayjs().isBefore(point.dateFrom);
}

function isPointPresent(point) {
  return (dayjs().isAfter(point.dateFrom) && dayjs().isBefore(point.dateTo));
}

function isPointPast(point) {
  return dayjs().isAfter(point.dateTo);
}

function sortByDay(pointA, pointB) {
  if (dayjs(pointA.dateFrom).isAfter(dayjs(pointB.dateFrom))) {
    return 1;
  }

  if (dayjs(pointA.dateFrom) === dayjs(pointB.dateFrom)) {
    return 0;
  }

  if (dayjs(pointA.dateFrom).isBefore(dayjs(pointB.dateFrom))) {
    return -1;
  }
}

function sortByTime(pointA, pointB) {
  return dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom)) - dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
}

function sortByPrice(pointA, pointB) {
  return pointB.basePrice - pointA.basePrice;
}

export { travelingEventDate, humanizeTravelTime, isPointFuture, isPointPresent, isPointPast, sortByDay, sortByTime, sortByPrice };
