/* global angular, gatling */

'use strict';

gatling.makeManagedArray = function (elements, ManagedType) {

  var managedArray = [];
  angular.forEach(elements, function (element) {
    this.push(new ManagedType(element));
  }, managedArray);

  return managedArray;
};
