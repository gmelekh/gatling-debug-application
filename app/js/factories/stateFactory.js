/* global angular, gatling */

'use strict';

gatling.factory('State', function () {

  return function (state) {

    return angular.extend(state, {

      base: function () {
        return Math.floor((this.position - this.simulationStart) / 100);
      },

      limit: function () {
        return Math.floor(5.49 / this.ratio + this.base());
      },

      delta: function (timestamp) {
        return timestamp - this.simulationStart;
      },

      positionOf: function (timestamp) {
        return (timestamp - this.position) * this.ratio;
      },

      positionOfGraduation: function (timestamp) {
        var shift = this.simulationStart - this.position;

        return (timestamp + shift) * this.ratio + 5;
      },

      widthOf: function (duration) {

        return duration * this.ratio;
      }
    });
  };
});
