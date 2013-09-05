var gatling = gatling || {};

(function ($) {

  'use strict';

  var Execs = Backbone.Collection.extend({

    model: gatling.Model.Exec,

    comparator: function (exec) {
      return exec.get("requestStartDate");
    }
  });

  gatling.Collection.execs = new Execs();
}(jQuery));
