'use strict';

import React from 'react';
import Router from 'react-router';

var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

var App = require('./views/app.jsx');
var Index = require('./views/index.jsx');

var routes = (
  <Route path='/' handler={App}>
    <DefaultRoute name='index' handler={Index} />
  </Route>
);

export default routes;
