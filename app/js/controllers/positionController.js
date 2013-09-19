/* global gatling */

'use strict';

gatling.controller('positionController', function ($rootScope, $scope) {

  $scope.increase = function () {
    $rootScope.timeline.state.axis += 50;
  };

  $scope.decrease = function () {
    $rootScope.timeline.state.axis -= 50;
  };

  $scope.reset = function () {
    $rootScope.timeline.state.axis = $rootScope.simulation.start;
  };
});
