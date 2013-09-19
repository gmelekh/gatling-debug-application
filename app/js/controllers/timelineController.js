/* global angular, gatling, debugData */

'use strict';

gatling.controller('timelineController', function ($rootScope, $scope, $element, State, Exec) {

  var start = debugData[0].requestStartDate,
    end = debugData[debugData.length - 1].responseEndDate;

  var width = $element.find('.timeline-header.timeline-col-14').width(),
    ratio = width / (end - start);

  $rootScope.simulation = {
    start: start
  };

  $rootScope.timeline = {
    baseRatio: ratio,
    realWidth: width,

    state: new State({
      ratio: ratio,
      axis: start
    })
  };

  $scope.execs = [];
  angular.forEach(debugData, function (exec) {
    this.push(new Exec(exec));
  }, $scope.execs);
});
