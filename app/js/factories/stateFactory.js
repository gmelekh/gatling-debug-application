/* global angular, gatling */

'use strict';

gatling.factory('State', function ($rootScope) {

  return function (state) {

    return angular.extend(state, {

      base: function () {
        return Math.floor((this.axis - $rootScope.simulation.start) / 100);
      },

      limit: function () {
        return Math.floor($rootScope.timeline.realWidth / 100 / this.ratio + this.base());
      },

      delta: function (timestamp) {
        return timestamp - $rootScope.simulation.start;
      },

      positionOf: function (timestamp) {
        return (timestamp - this.axis) * this.ratio;
      },

      positionOfGraduation: function (timestamp) {
        var shift = $rootScope.simulation.start - this.axis;

        return (timestamp + shift) * this.ratio + 5;
      },

      widthOf: function (duration) {

        return duration * this.ratio;
      }
    });
  };
});
