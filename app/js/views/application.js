var gatling = gatling || {};
var debugData = debugData || {};

(function ($) {

  'use strict';

  var Execs = Backbone.Collection.extend({

    model: gatling.Model.Exec,

    comparator: function (exec) {
      return exec.get("requestStartDate");
    }
  });

  gatling.View.Application = Backbone.View.extend({

    el: $('#timeline'),

    initialize: function () {
      this.collection = new Execs();
      this.collection.add(debugData);

      this.render();
    },

    render: function () {
      this.collection.each(function (exec) {
        var execView = new gatling.View.Exec({ model: exec });

        this.$('tbody').append(execView.render().el);
      }, this);
    }
  });
}(jQuery));
