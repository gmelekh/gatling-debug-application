/* global angular, gatling */

'use strict';

gatling.controller('rulerController', function ($rootScope, $scope, Graduation) {

  function computeMillis(index) {
    return (index + 1) * 100;
  }

  function createGraduation(index) {
    return new Graduation({
      millis: computeMillis(index)
    });
  }

  function stateWatch() {
    var state = $rootScope.timeline.state;

    $scope.graduations = [];
    for (var index = state.base(); index < state.limit(); index++) {
      $scope.graduations.push(createGraduation(index));
    }
  }

  // There must be two of them:
  // `state.position || state.ratio` won't work
  $rootScope.$watch('timeline.state.axis', stateWatch);
  $rootScope.$watch('timeline.state.ratio', stateWatch);
});
