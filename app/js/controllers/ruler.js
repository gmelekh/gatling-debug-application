/* global angular, gatling */

'use strict';

gatling.controller('rulerController', function ($rootScope, $scope, Graduation) {

  var graduations = [];
  for (var i = 0; i < 12; i++) {
    graduations.push({
      millis: (i + 1) * 100
    });
  }

  $scope.graduations = [];
  angular.forEach(graduations, function (graduation) {
    $scope.graduations.push(new Graduation(graduation));
  });
});
