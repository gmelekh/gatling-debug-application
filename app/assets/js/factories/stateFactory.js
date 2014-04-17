/* global angular, gatling */

'use strict';

gatling.factory('State', ['$rootScope', function ($rootScope) {

  return function (state) {

    return angular.extend(state, {

      axisStart: function () {
        // TODO don't divide by 100 to times ?
        return Math.floor((this.currentDate - this.defaults.startDate) / 100);
      },

      axisEnd: function () {
        // Same here
        return Math.floor(this.defaults.realWidth / 100 / this.ratio + this.axisStart());
      },

      delta: function (timestamp) {
        return timestamp - $rootScope.defaults.startDate;
      },

      positionOf: function (timestamp) {
        return (timestamp - this.currentDate) * this.ratio;
      },

      positionOfGraduation: function (timestamp) {
        var shift = $rootScope.defaults.startDate - this.currentDate;

        return (timestamp + shift) * this.ratio + 5; // TODO plus 5 padding...
      },

      widthOf: function (duration) {

        return duration * this.ratio;
      }
    });
  };
}]);
