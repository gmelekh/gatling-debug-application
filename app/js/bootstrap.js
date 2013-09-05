var gatling = gatling || {};

(function () {

  'use strict';

  // Underscore.js configuration

  _.templateSettings = {
    // Mustache like interpolation pattern
    interpolate: /\{\{(.+?)\}\}/g,
    // Skip scope resolution
    variable: 'exec'
  };

  // Configuration

  gatling.Model = {};
  gatling.Model.Base = Backbone.Model.extend({

    // Transfer computed values to JSON output
    toComputedJSON: function () {
      var json = this.toJSON();

      var that = this;

      _.each(this.computed, function (key) {
        if (_.isFunction(that[key])) {
          json[key] = that[key](that);
        }
      });

      return json;
    }
  });

  gatling.Collection = {};
  gatling.Template = {};
  gatling.View = {};
}());
