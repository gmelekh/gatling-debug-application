var gatling = gatling || {};

(function ($) {

  'use strict';

  gatling.Date = function (timestamp) {
    this.getTime = function () {
      return timestamp;
    };

    this.toString = function () {
      return $.formatDateTime('gg:ii:ss.uu', new Date(timestamp));
    };
  };
}(jQuery));
