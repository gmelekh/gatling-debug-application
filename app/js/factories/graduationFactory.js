/* global angular, gatling */

'use strict';

gatling.factory('Graduation', function ($rootScope) {

  return function (graduation) {

    return angular.extend(graduation, {

      position: function () {
        return $rootScope.timeline.state.positionOfGraduation(this.millis);
      },

      value: function () {
        var value = this.millis % 1000;
        if (this.millis !== 0 && value % 1000 === 0) {

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
