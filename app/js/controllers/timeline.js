/* global angular, gatling, debugData */

'use strict';

gatling.controller('timelineController', function ($rootScope, $scope, Exec) {

  $scope.execs = gatling.makeManagedArray(debugData, Exec);

  $rootScope.simulationStart = debugData[0].requestStartDate;
  $rootScope.position = $rootScope.simulationStart;
});
