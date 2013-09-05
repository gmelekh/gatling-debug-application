var gatling = gatling || {};

(function ($) {

  'use strict';

  gatling.View.Exec = Backbone.View.extend({

    tagName: 'tr',

    template: _.template(gatling.Template.Exec),

    events: {
      'click .exec': 'printInfo'
    },

    render: function () {
      this.$el.html(this.template(this.model.toComputedJSON()));

      return this;
    },

    printInfo: function () {
      alert('clicked!');
    }
  });
}(jQuery));
