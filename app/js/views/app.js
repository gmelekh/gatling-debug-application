var gatling = gatling || {};

(function ($) {

  'use strict';

  gatling.View.Application = Backbone.View.extend({

    initialize: function () {
      this.$timeline = $('#timeline');
      this.listenTo(gatling.Collection.execs, 'add', this.addOne);
    },

    render: function () {
      // Do nothing ?
    },

    addOne: function (exec) {
      var view = new gatling.View.Exec({ model: exec });
      this.$timeline.children('tbody').append(view.render().el);
    }
  });
}(jQuery));
