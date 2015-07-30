'use strict';

module.exports = function clean(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');

    return {
        build: '.dist'
    };
};
