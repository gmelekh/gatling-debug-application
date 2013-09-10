var gatling = gatling || {};

(function ($) {

  'use strict';

  gatling.Timestamp = function (timestamp) {
    this.getTime = function () {
      return timestamp;
    };

    this.toString = function () {
      var seconds = Math.floor(timestamp / 1000);
      if (seconds === 0) {
        return timestamp + ' ms';
      }

      var date = new Date(timestamp);

      var minutes = Math.floor(seconds / 60);
      if (minutes === 0) {
        return $.formatDateTime('s.uu', date) + ' s';
      }

      var hours = Math.floor(minutes / 60);
      if (hours === 0) {
        return $.formatDateTime('i:ss.uu', date) + ' m';
      }

      return $.formatDateTime('g:ii:ss.uu', date);
    };
  };
}(jQuery));
