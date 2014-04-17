/* global gatling */

'use strict';

gatling.controller('positionController', ['$rootScope', '$scope', function ($rootScope, $scope) {

  $scope.increase = function () {
    $rootScope.state.currentDate += 50;
  };

  $scope.decrease = function () {
    $rootScope.state.currentDate -= 50;
  };

  $scope.reset = function () {
    $rootScope.state.currentDate = $rootScope.defaults.startDate;
  };
}]);
