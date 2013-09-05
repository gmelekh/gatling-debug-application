var gatling = gatling || {};

(function () {

  'use strict';

  var mock = {
    name: 'getLogin',
    type: "Query",
    requestStartDate: 1377174135666,
    requestEndDate: 1377174135666,
    responseStartDate: 1377174135975,
    responseEndDate: 1377174135975
  };

  describe('gatling.Model.Exec suite', function () {

    var exec;

    beforeEach(function () {
      exec = new gatling.Model.Exec();
      exec.set(mock);
    });

    it('should allow value computing', function () {
      expect(exec.responseTime()).toBe(309);
    });

    it('should allow value computing interpolation', function () {
      var json = exec.toComputedJSON();

      expect(json.responseTime).toBe(309);
    });
  });
}());
