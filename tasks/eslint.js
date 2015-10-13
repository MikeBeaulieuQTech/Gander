'use strict';


module.exports = function eslint(grunt) {
    grunt.loadNpmTasks('grunt-eslint');
    return {
        options: {
          configFile: '.eslint',
        },
        target: [
            'src/controllers/**/*.js',
            'src/lib/**/*.js',
            'src/models/**/*.js'
        ]
    };
};
