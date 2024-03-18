import moment from 'moment';

export const convertUnixToLocalTime = (unixTime, timezone, format) => {
  return moment
    .unix(unixTime)
    .utcOffset(timezone / 3600)
    .format(format);
};
