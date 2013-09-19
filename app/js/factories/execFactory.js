/* global angular, gatling */

'use strict';

gatling.factory('Exec', function ($rootScope) {

  return function (exec) {

    return angular.extend(exec, {

      responseTime: function () {
        return this.responseEndDate - this.requestStartDate;
      },

      startDeltaTime: function () {
        return $rootScope.timeline.state.delta(this.requestStartDate);
      },

      endDeltaTime: function () {
        return $rootScope.timeline.state.delta(this.responseEndDate);
      },

      position: function () {
        return $rootScope.timeline.state.positionOf(this.requestStartDate);
      },

      width: function () {
        return $rootScope.timeline.state.widthOf(this.responseTime());
      }
    });
  };
});
