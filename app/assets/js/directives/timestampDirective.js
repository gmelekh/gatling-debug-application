/* global gatling */

'use strict';

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

      $rootScope.$watch('state.currentDate', stateWatch(scope.exec));
      $rootScope.$watch('state.ratio', stateWatch(scope.exec));
    }
  };
});
