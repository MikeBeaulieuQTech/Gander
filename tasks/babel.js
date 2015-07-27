'use strict';

module.exports = function clean(grunt) {

  grunt.loadNpmTasks('grunt-babel');

  return {
    options: {
      sourceMap: false
    },
    dist: {
      files: [{
        expand: true,
        src: ['service/**/*.js', 'web/**/*.js', 'web/**/*.jsx'],
        dest: '<%= _config.folders.transpiled %>' + '/'
      }]
    }
  };
};
