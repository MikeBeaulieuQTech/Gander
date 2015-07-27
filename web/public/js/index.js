'use strict';

import React from 'react';
import Routes from './routes.jsx';
import Client from 'react-engine/lib/client';

// boot options
var options = {
    routes: Routes,
    // supply a function that can be called to resolve the file that was rendered
    viewResolver: function(viewName) {
        return require('./views/' + viewName);
    }
};

// finally, boot whenever you are ready
document.addEventListener('DOMContentLoaded', function onLoad() {
  Client.boot(options);
});
