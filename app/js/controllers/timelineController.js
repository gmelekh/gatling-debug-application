/* global angular, gatling, debugData */

'use strict';

gatling.controller('timelineController', function ($rootScope, $scope, $element, State, Exec) {

  var start = debugData[0].requestStartDate,
    end = debugData[debugData.length - 1].responseEndDate;

  // TODO magic value: timeline-col-14 width without margin
  var ratio = 549 / (end - start),
    simulationStart = debugData[0].requestStartDate;

  $rootScope.timeline = {
    width: $element.find('.timeline-header.timeline-col-14').width()
  };

  $rootScope.state = new State({
    ratio: ratio,
    baseRatio: ratio,
    position: simulationStart,
    simulationStart: simulationStart
  });

  $scope.execs = [];
  angular.forEach(debugData, function (exec) {
    this.push(new Exec(exec));
  }, $scope.execs);
});
