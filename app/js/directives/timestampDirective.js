/* global gatling */

'use strict';

gatling.directive('timestamp', function ($rootScope, $timeout) {

  return {
    restrict: 'A',
    scope: true,
    link: function (scope, element) {

      function baywatch(exec) {

        return function () {
          var position = exec.position(),
            width = exec.width() + element.prop('clientWidth');

          if (position + width >= $rootScope.timeline.width) {
            element.css('right', width);
          } else {
            element.removeAttr('style');
          }
        };
      }

      $rootScope.$watch('state.position', baywatch(scope.exec));
      $rootScope.$watch('state.ratio', baywatch(scope.exec));
    }
  };
});
