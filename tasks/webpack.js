'use strict';

module.exports = function webpack(grunt) {

  grunt.loadNpmTasks('grunt-webpack');

  return {
    someName: {
      // webpack options
      entry: './.dist/web/public/js/index.js',
      output: {
          path: './.dist/web/.build/js/',
          filename: 'bundle.js',
      },

      stats: {
          // Configure the console output
          colors: false,
          modules: true,
          reasons: true
      },
      // stats: false disables the stats output

      storeStatsTo: 'xyz', // writes the status to a variable named xyz
      // you may use it later in grunt i.e. <%= xyz.hash %>

      progress: true, // Don't show progress
      // Defaults to true

      failOnError: false, // don't report error to grunt if webpack find errors
      // Use this if webpack errors are tolerable and grunt should continue

      module: {
        loaders: [
          {
            test: /\.json$/,
            loader: 'json-loader'
          }
        ]
      }
    }
  }
};
