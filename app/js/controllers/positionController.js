/* global gatling */

'use strict';

gatling.controller('positionController', function ($rootScope, $scope) {

  $scope.increase = function () {
    $rootScope.position += 50;
  };

  $scope.decrease = function () {
    $rootScope.position -= 50;
  };

  $scope.reset = function () {
    $rootScope.position = $rootScope.simulationStart;
  };
});
