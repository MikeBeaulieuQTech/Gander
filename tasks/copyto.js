'use strict';


module.exports = function copyto(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-copy-to');

    // Options
    return {
        build: {
            files: [{
                cwd: 'src',
                src: ['**/*.json'],
                dest: '.dist/'
            },{
                cwd: 'src',
                src: ['public/css/**/*.less'],
                dest: '.dist/'
            }]
        }
    };
};
