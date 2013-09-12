/* global gatling, debugData */

'use strict';

gatling.controller('ratioController', function ($rootScope) {
  var start = debugData[0].requestStartDate,
    end = debugData[debugData.length - 1].responseStartDate;

  // TODO magic value: timeline-col-14 width without margin,
  // plus supposed following span length
  $rootScope.ratio = 549 / (end - start + 100);
});
