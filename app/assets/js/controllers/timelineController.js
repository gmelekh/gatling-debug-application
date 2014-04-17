/* global angular, gatling, debugData */

'use strict';

gatling.controller('timelineController', ['$rootScope', '$scope', '$element', 'State', 'Exec', function ($rootScope, $scope, $element, State, Exec) {

  var start = debugData[0].requestStartDate,
    end = debugData[debugData.length - 1].responseEndDate;

  var width = $element.find('.timeline-header.timeline-col-14').width(),
    ratio = width / (end - start);

  var defaults = { // should be immutable, but unique per timeline (aka, per simulation)
    baseRatio: ratio,
    realWidth: width,
    startDate: start
  };

  $rootScope.defaults = defaults;
  $rootScope.state = new State({ // variable, defines the current state of the timeline
    currentDate: start,
    ratio: ratio,

    defaults: defaults
  });

  $scope.execs = [];
  angular.forEach(debugData, function (exec) {
    this.push(new Exec(exec));
  }, $scope.execs);
}]);
