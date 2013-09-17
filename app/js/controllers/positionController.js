/* global gatling */

'use strict';

gatling.controller('positionController', function ($rootScope, $scope) {

  $scope.increase = function () {
    $rootScope.state.position += 50;
  };

  $scope.decrease = function () {
    $rootScope.state.position -= 50;
  };

  $scope.reset = function () {
    $rootScope.state.position = $rootScope.state.simulationStart;
  };
});
