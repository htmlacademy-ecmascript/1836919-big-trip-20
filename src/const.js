const CITIES = ['Omsk', 'Kursk', 'Lipetsk', 'Kemerovo', 'Moscow', 'Nadym', 'Norilsk', 'Petrozavodsk', 'Penza'];
const TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;
const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;
const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

const DATE_FORMAT = {
  MONTH_DAY: 'MMM DD',
  HOUR_MINUTES: 'HH:mm',
  FULL_DATETIME_DASH: 'YYYY-MM-DD',
  FULL_DATETIME_SLASH: 'DD/MM/YY HH:mm',
  FULL_COUNT: 'DD[D ] HH[H ] mm[M]',
  HOUR_MINUTES_COUNT: 'HH[H] mm[M]',
  MINUTES_COUNT: 'mm[M]',
};

export { CITIES, TYPES, DATE_FORMAT, MSEC_IN_HOUR, MSEC_IN_DAY };
