/* global gatling, debugData */

'use strict';

gatling.controller('ratioController', ['$rootScope', '$scope', function ($rootScope, $scope) {

  $scope.increase = function () {
    $rootScope.state.ratio += 0.1;
  };

  $scope.decrease = function () {
    $rootScope.state.ratio -= 0.1;
  };

  $scope.reset = function () {
    $rootScope.state.ratio = $rootScope.defaults.baseRatio;
  };
}]);
