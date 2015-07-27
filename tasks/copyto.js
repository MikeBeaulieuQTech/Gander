'use strict';


module.exports = function copyto(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-copy-to');

    // Options
    return {
        build: {
            files: [{
                cwd: 'web',
                src: ['**/*.json'],
                dest: '.dist/web/'
            },{
                cwd: 'web',
                src: ['public/css/**/*.less'],
                dest: '.dist/web/'
            }]
        }
    };
};
