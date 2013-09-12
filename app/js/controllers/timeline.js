/* global angular, gatling, debugData */

'use strict';

gatling.controller('timelineController', function ($rootScope, $scope, Exec) {
  $scope.execs = [];
  angular.forEach(debugData, function (exec) {
    this.push(new Exec(exec));
  }, $scope.execs);

  $rootScope.simulationStart = debugData[0].requestStartDate;
});
