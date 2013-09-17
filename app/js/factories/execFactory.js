/* global angular, gatling */

'use strict';

gatling.factory('Exec', function ($rootScope) {

  return function (exec) {

    return angular.extend(exec, {

      responseTime: function () {
        return this.responseEndDate - this.requestStartDate;
      },

      startDeltaTime: function () {
        return this.requestStartDate - $rootScope.simulationStart;
      },

      endDeltaTime: function () {
        return this.responseEndDate - $rootScope.simulationStart;
      },

      position: function () {
        return (this.requestStartDate - $rootScope.position) * $rootScope.ratio;
      },

      width: function () {
        return this.responseTime() * $rootScope.ratio;
      }
    });
  };
});
