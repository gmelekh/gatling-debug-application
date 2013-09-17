/* global gatling */

'use strict';

gatling.filter('gatlingTimestamp', function ($filter) {

  return function (timestamp) {
    var seconds = Math.floor(timestamp / 1000);
    if (seconds === 0) {
      return timestamp + ' ms';
    }

    var date = new Date(timestamp);

    var minutes = Math.floor(seconds / 60);
    if (minutes === 0) {
      return $filter('date')(date, 's.sss') + ' s';
    }

    var hours = Math.floor(minutes / 60);
    if (hours === 0) {
      return $filter('date')(date, 'm:ss.sss') + ' m';
    }

    return $filter('date')(date, 'h:mm:ss.sss');
  };
});
