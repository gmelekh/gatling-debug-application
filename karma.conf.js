module.exports = function (config) {

  'use strict';

  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // vendor
      'bower_components/jquery/jquery.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'bower_components/angular/angular.min.js',
      // simulation data
      'dist/data/gatling-debug-data.js',
      // application bootstrap
      'app/js/bootstrap.js',
      // javascripts
      'app/js/filters/*.js',
      'app/js/factories/*.js',
      'app/js/controllers/*.js',
      // html
      'public/index.tpl',
      // tests
      'test/**/*.spec.js'
    ],

    exclude: [],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],

    // web server port
    port: 9876,

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
