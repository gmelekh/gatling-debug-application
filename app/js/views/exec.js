var gatling = gatling || {};

(function ($) {

  'use strict';

  gatling.View.Exec = Backbone.View.extend({

    tagName: 'tr',

    template: _.template($('#exec-template').html()),

    events: {
      'click .exec': 'subtractSmallAmount'
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.printInfo);
    },

    render: function () {
      this.$el.html(this.template(this.model.toComputedJSON()));

      return this;
    },

    subtractSmallAmount: function () {
      this.model.subtractSmallAmount();
    },

    printInfo: function () {
      this.render();
    }
  });
}(jQuery));
