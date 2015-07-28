'use strict';

module.exports = function watch(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');

  var options = {
    spawn: false,
    interrupt: false
  };

  return {
    babel: {
      files: ['service/**/*', 'web/**/*'],
      tasks: ['build'],
      options: options
    }
  };
};
