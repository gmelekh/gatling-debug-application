/* global gatling, debugData */

'use strict';

gatling.controller('ratioController', function ($rootScope, $scope) {

  $scope.increase = function () {
    $rootScope.timeline.state.ratio += 0.1;
  };

  $scope.decrease = function () {
    $rootScope.timeline.state.ratio -= 0.1;
  };

  $scope.reset = function () {
    $rootScope.timeline.state.ratio = $rootScope.timeline.baseRatio;
  };
});
