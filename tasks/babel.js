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
        cwd: 'src/',
        src: ['**/*.js', '**/*.jsx'],
        dest: '<%= _config.folders.transpiled %>' + '/'
      }]
    }
  };
};

