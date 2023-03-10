// const moment = require("moment-timezone");
const moment = require('moment');
const TimezoneConverter = (timeInput) => {
  // create a moment object from the timestamp in UTC timezone
  // const utcMoment = moment.utc(timeInput);

  // get the current timezone of the system
  // const localTimezone = moment.tz.guess();

  // convert the UTC moment to the local timezone
  // const localMoment = utcMoment.clone().tz(localTimezone);

  // convert the local moment to timestamp
  // const localTimestamp = localMoment.valueOf();
  const timestamp='2023-02-23 15:00:00';
console.log(moment(timestamp.format('YYYY-MM-DD HH:mm:ss')))
  // console.log('timezone',localTimezone);
  // return localTimestamp;
};

module.exports = TimezoneConverter;
