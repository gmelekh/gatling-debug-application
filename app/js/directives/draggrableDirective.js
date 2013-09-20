/* global console, angular, gatling */

'use strict';

gatling.directive('draggable', function ($rootScope, $timeout) {

  return {
    restrict: 'A',
    scope: true,

    link: function (scope, element) {

      function mousemove(event) {
        event.preventDefault();

        $rootScope.state.currentDate -= (event.clientX - scope.lastX) / $rootScope.state.ratio;

        scope.lastX = event.clientX;
        scope.$apply();
      }

      function enableDragging(event) {
        event.preventDefault();

        scope.lastX = event.clientX;

        element.on('mousemove', mousemove);
        element.addClass('unselectable');
      }

      function disableDragging() {
        element.off('mousemove', mousemove);
        element.removeClass('unselectable');
      }

      $timeout(function () {
        angular.forEach(element.find('.timeline-exec'), function (exec) {
          angular.element(exec).on('mousedown', enableDragging);
        });

        element.on('mouseup', disableDragging);
        element.on('mouseleave', disableDragging);
        element.on('windowleave', disableDragging);
      });
    }
  };
});
