/* global angular, gatling */

'use strict';

gatling.factory('Graduation', function ($rootScope) {

  return function (graduation) {

    return angular.extend(graduation, {

      position: function () {
        var shift = $rootScope.simulationStart - $rootScope.position;

        return (this.millis + shift) * $rootScope.ratio;
      },

      value: function () {
        var value = this.millis % 1000;
        if (value % 1000 === 0) {
          return this.millis / 1000 + ' s';
        }

        return value;
      },

      isThousand: function () {
        return this.millis % 1000 === 0;
      }
    });
  };
});
