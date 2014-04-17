/* global angular, gatling */

'use strict';

gatling.controller('rulerController', ['$rootScope', '$scope', 'Graduation', function ($rootScope, $scope, Graduation) {

  function computeMillis(index) {
    return (index + 1) * 100;
  }

  function createGraduation(index) {
    return new Graduation({
      millis: computeMillis(index)
    });
  }

  function stateWatch() {
    var state = $rootScope.state;

    $scope.graduations = [];
    for (var index = state.axisStart(); index < state.axisEnd(); index++) {
      $scope.graduations.push(createGraduation(index));
    }
  }

  // There must be two of them:
  // `state.position || state.ratio` won't work
  $rootScope.$watch('state.currentDate', stateWatch);
  $rootScope.$watch('state.ratio', stateWatch);
}]);
