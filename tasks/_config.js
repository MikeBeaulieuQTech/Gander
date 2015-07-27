'use strict';

var normalize = require('path').normalize;

// a common file with config options for grunt tasks
module.exports = function(grunt) {

    return {
        files: {
            javaScript: ['src/**/*.js',
                            'tasks/**/*',
                            'Gruntfile.js',
                            'index.js'],

            jsx: ['src/public/**/*.jsx'],
            less: ['src/public/css/app.less'],
            watchedLess: ['src/public/css/*.less'],
            browserifyWhitelist: ['.dist/public/*',
                            '.dist/routes/*',
                            'lib/model/*',
                            'config/ui.json']
        },
        folders: {
            coverage: 'coverage',
            reports: 'reports',
            transpiled: '.dist'
        }
    };
};
