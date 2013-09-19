/* global angular, gatling */

'use strict';

gatling.factory('Exec', function ($rootScope) {

  return function (exec) {

    return angular.extend(exec, {

      responseTime: function () {
        return this.responseEndDate - this.requestStartDate;
      },

      startDeltaTime: function () {
        return $rootScope.state.delta(this.requestStartDate);
      },

      endDeltaTime: function () {
        return $rootScope.state.delta(this.responseEndDate);
      },

      position: function () {
        return $rootScope.state.positionOf(this.requestStartDate);
      },

      width: function () {
        return $rootScope.state.widthOf(this.responseTime());
      }
    });
  };
});
