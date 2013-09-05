var gatling = gatling || {};

(function ($) {

  'use strict';

  gatling.Model.Exec = gatling.Model.Base.extend({

    defaults: {
      type: 'Exec',
      name: 'base',
      requestStartDate: 0,
      requestEndDate: 0,
      responseStartDate: 0,
      responseEndDate: 0
    },

    computed: [
      'responseTime',
      'startDeltaTime',
      'startTimestamp',
      'endDeltaTime',
      'endTimestamp',
      'margin',
      'width'
    ],

    subtractSmallAmount: function () {
      this.set({
        responseStartDate: this.get('responseStartDate') - 10,
        responseEndDate: this.get('responseEndDate') - 10
      });
    },

    responseTime: function () {
      return this.get('responseEndDate') - this.get('requestStartDate');
    },

    startDeltaTime: function () {
      return this.get('requestStartDate') - debugData[0].requestStartDate;
    },

    startTimestamp: function () {
      return $.formatDateTime('gg:ii:ss.uu', new Date(this.get('requestStartDate')));
    },

    endDeltaTime: function () {
      return this.get('responseEndDate') - debugData[0].requestStartDate;
    },

    endTimestamp: function () {
      return $.formatDateTime('gg:ii:ss.uu', new Date(this.get('responseEndDate')));
    },

    margin: function () {
      return this.startDeltaTime() * 0.5;
    },

    width: function () {
      return this.responseTime() * 0.5;
    }
  });
}(jQuery));
