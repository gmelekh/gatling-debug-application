// Source: app/js/bootstrap.js

var gatling = angular.module('GatlingDebug', []);

// Source: app/js/filters/dateFilter.js

gatling.filter('gatlingDate', function ($filter) {

  return function (timestamp) {
    return $filter('date')(timestamp, 'h:mm:ss.sss');
  };
});

// Source: app/js/filters/timestampFilter.js

gatling.filter('gatlingTimestamp', function ($filter) {

  return function (timestamp) {
    var seconds = Math.floor(timestamp / 1000);
    if (seconds === 0) {
      return timestamp + ' ms';
    }

    var date = new Date(timestamp);

    var minutes = Math.floor(seconds / 60);
    if (minutes === 0) {
      return $filter('date')(date, 's.sss') + ' s';
    }

    var hours = Math.floor(minutes / 60);
    if (hours === 0) {
      return $filter('date')(date, 'm:ss.sss') + ' m';
    }

    return $filter('date')(date, 'h:mm:ss.sss');
  };
});

// Source: app/js/factories/execFactory.js

gatling.factory('Exec', function ($rootScope) {

  return function (exec) {

    return angular.extend(exec, {

      responseTime: function () {
        return this.responseEndDate - this.requestStartDate;
      },

      startDeltaTime: function () {
        return $rootScope.state.delta(this.requestStartDate);
      },

      endDeltaTime: function () {
        return $rootScope.state.delta(this.responseEndDate);
      },

      position: function () {
        return $rootScope.state.positionOf(this.requestStartDate);
      },

      width: function () {
        return $rootScope.state.widthOf(this.responseTime());
      }
    });
  };
});

// Source: app/js/factories/graduationFactory.js

gatling.factory('Graduation', function ($rootScope) {

  return function (graduation) {

    return angular.extend(graduation, {

      position: function () {
        return $rootScope.state.positionOfGraduation(this.millis);
      },

      value: function () {
        var value = this.millis % 1000;
        if (this.millis !== 0 && value % 1000 === 0) {

          return this.millis / 1000 + ' s';
        }

        return value;
      },

      isThousand: function () {
        return this.millis % 1000 === 0;
      }
    });
  };
});

// Source: app/js/factories/stateFactory.js

gatling.factory('State', function ($rootScope) {

  return function (state) {

    return angular.extend(state, {

      axisStart: function () {
        // TODO don't divide by 100 to times ?
        return Math.floor((this.currentDate - this.defaults.startDate) / 100);
      },

      axisEnd: function () {
        // Same here
        return Math.floor(this.defaults.realWidth / 100 / this.ratio + this.axisStart());
      },

      delta: function (timestamp) {
        return timestamp - $rootScope.defaults.startDate;
      },

      positionOf: function (timestamp) {
        return (timestamp - this.currentDate) * this.ratio;
      },

      positionOfGraduation: function (timestamp) {
        var shift = $rootScope.defaults.startDate - this.currentDate;

        return (timestamp + shift) * this.ratio + 5; // TODO plus 5 padding...
      },

      widthOf: function (duration) {

        return duration * this.ratio;
      }
    });
  };
});

// Source: app/js/directives/timestampDirective.js

gatling.directive('timestamp', function ($rootScope) {

  return {
    restrict: 'A',
    scope: true,

    link: function (scope, element) {

      function stateWatch(exec) {

        return function () {
          var position = exec.position(),
            width = exec.width() + element.prop('clientWidth');

          if (position + width >= $rootScope.defaults.realWidth) {
            element.css('right', width);
          } else {
            element.removeAttr('style');
          }
        };
      }

      $rootScope.$watch('timeline.state.currentDate', stateWatch(scope.exec));
      $rootScope.$watch('timeline.state.ratio', stateWatch(scope.exec));
    }
  };
});

// Source: app/js/controllers/positionController.js

gatling.controller('positionController', function ($rootScope, $scope) {

  $scope.increase = function () {
    $rootScope.state.currentDate += 50;
  };

  $scope.decrease = function () {
    $rootScope.state.currentDate -= 50;
  };

  $scope.reset = function () {
    $rootScope.state.currentDate = $rootScope.defaults.startDate;
  };
});

// Source: app/js/controllers/ratioController.js

gatling.controller('ratioController', function ($rootScope, $scope) {

  $scope.increase = function () {
    $rootScope.state.ratio += 0.1;
  };

  $scope.decrease = function () {
    $rootScope.state.ratio -= 0.1;
  };

  $scope.reset = function () {
    $rootScope.state.ratio = $rootScope.defaults.baseRatio;
  };
});

// Source: app/js/controllers/rulerController.js

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
});

// Source: app/js/controllers/timelineController.js

gatling.controller('timelineController', function ($rootScope, $scope, $element, State, Exec) {

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
});
