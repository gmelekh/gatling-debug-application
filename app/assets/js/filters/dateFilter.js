/* global gatling */

'use strict';

gatling.filter('gatlingDate', ['$filter', function ($filter) {

  return function (timestamp) {
    return $filter('date')(timestamp, 'h:mm:ss.sss');
  };
}]);
