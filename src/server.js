'use strict';

var http = require('http');
var app = require('./index');

require('./service/sync');
require('node-jsx').install({extension: '.jsx'});

/*
 * Create and start HTTP server.
 */
var server = http.createServer(app);
server.listen(process.env.PORT || 8000);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});
