/* global angular, gatling */

'use strict';

gatling.controller('rulerController', function ($rootScope, $scope, Graduation) {

  function base() {
    return $rootScope.state.base();
  }

  function limit() {
    return $rootScope.state.limit();
  }

  function millis(index) {
    return (index + 1) * 100;
  }

  function graduation(index) {
    return new Graduation({
      millis: millis(index)
    });
  }

  function stateWatcher() {
    $scope.graduations = [];
    for (var i = base(); i < limit(); i++) {
      $scope.graduations.push(graduation(i));
    }
  }

  // There must be two of them:
  // `state.position || state.ratio` won't work
  $rootScope.$watch('state.position', stateWatcher);
  $rootScope.$watch('state.ratio', stateWatcher);
});
