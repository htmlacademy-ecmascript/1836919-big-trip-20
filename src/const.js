const OFFER_COUNT = 5;

const DESCRIPTION_COUNT = 5;

const POINT_COUNT = 5;

const TYPES = [
  'Taxi', 
  'Bus', 
  'Train', 
  'Ship', 
  'Drive', 
  'Flight', 
  'Check-in', 
  'Sightseeing', 
  'Restaurant'
];

const DEFAULT_TYPE = 'flight';

const POINT_EMPTY = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: DEFAULT_TYPE
};

// const DATE_FORMAT = {
//   MONTH_DAY: 'MMM DD',
//   HOUR_MINUTES: 'HH:mm',
//   FULL_DATETIME_DASH: 'YYYY-MM-DDTHH:mm',
//   FULL_DATETIME_SLASH: 'DD/MM/YYTHH:mm'
// };

export { 
  TYPES
};