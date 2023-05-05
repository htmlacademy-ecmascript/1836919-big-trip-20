import dayjs from 'dayjs';

function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

function getRandomValue(items) {
  return items[getRandomInteger(0, items.length - 1)];
}




// function travelingEventShortDate(date) {
//   return date ? dayjs(date).format(DATE_SHORT_FORMAT) : '';
// }

// function travelingEventDate(date) {
//   return date ? dayjs(date).format(DATE_FORMAT) : '';
// }

// function travelingEventTimeDate(date) {
//   return date ? dayjs(date).format(TIME_DATE_FORMAT) : '';
// }

// function travelingEventDateSlash(date) {
//   return date ? dayjs(date).format(DATE_FORMAT_SLASH) : '';
// }

export { getRandomInteger, getRandomValue };
