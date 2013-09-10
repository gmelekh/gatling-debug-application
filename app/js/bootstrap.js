var gatling = gatling || {};

(function () {

  'use strict';

  // Underscore.js configuration

  // Skip scope resolution
  _.templateSettings.variable = 'exec';

  // Configuration

  gatling.Model = {};
  gatling.Model.Base = Backbone.Model.extend({

    // Transfer computed values to JSON output
    toComputedJSON: function () {
      var json = this.toJSON();

      _.each(this.computed, function (key) {
        if (_.isFunction(this[key])) {
          json[key] = this[key]();
        }
      }, this);

      return json;
    }
  });

  gatling.Collection = {};
  gatling.Template = {};
  gatling.View = {};
}());
