/* global gatling, debugData */

'use strict';

gatling.controller('ratioController', function ($rootScope, $scope) {

  var start = debugData[0].requestStartDate,
    end = debugData[debugData.length - 1].responseEndDate;

  // TODO magic value: timeline-col-14 width without margin,
  // plus supposed following span length
  $rootScope.baseRatio = 549 / (end - start + 100);
  $rootScope.ratio = $rootScope.baseRatio;

  $scope.increase = function () {
    $rootScope.ratio += 0.1;
  };

  $scope.decrease = function () {
    $rootScope.ratio -= 0.1;
  };

  $scope.reset = function () {
    $rootScope.ratio = $rootScope.baseRatio;
  };
});
