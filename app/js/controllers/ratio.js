/* global gatling */

'use strict';

gatling.controller('ratioController', function ($rootScope, $scope) {
  $rootScope.ratio = 0.5;

  $scope.increase = function () {
    $rootScope.ratio += 0.1;
  };

  $scope.decrement = function () {
    $rootScope.ratio -= 0.1;
  };
});
