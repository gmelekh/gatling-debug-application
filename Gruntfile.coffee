'use strict';

module.exports = (grunt) ->

  # Project configuration
  grunt.initConfig

    pkg: grunt.file.readJSON('package.json')

    clean:
      src: ['dist/css', 'dist/js']

    jshint:
      all: ['Gruntfile.js', 'app/js/**/*.js', 'test/**/*.js']
      options:
        globalstrict: true

    concat:
      options:
        process: (src, path) ->
          '// Source: ' + path + '\n' + src.replace(/\/\* .* \*\/\n*'use strict';\n/g, '')
      all:
        src: [
          'app/js/bootstrap.js'
          'app/js/filters/*.js'
          'app/js/factories/*.js'
          'app/js/directives/*.js'
          'app/js/controllers/*.js'
        ]
        dest: 'dist/js/gatling-debug.js'

    uglify:
      options:
        mangle:
          except: [
            '$rootScope'
            '$scope'
            '$filter'
            '$element'
            'Exec'
            'State'
            'Graduation'
          ]
      all:
        files:
          'dist/js/gatling-debug.min.js': ['dist/js/gatling-debug.js']

    less:
      development:
        options:
          paths: ['app/less/bootstrap', 'app/less']
        files:
          'dist/css/gatling-debug.css': 'app/less/**/*.less'
      production:
        options:
          paths: ['app/less/bootstrap', 'app/less']
          yuicompress: true
        files:
          'dist/css/gatling-debug.min.css': 'app/less/**/*.less'

  # Tasks
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-less')

  # Default task
  grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify', 'less'])
