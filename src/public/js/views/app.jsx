'use strict';

// mother template for react-router

import React from 'react';
import Layout from './layout.jsx';
import Router from 'react-router';

class App extends React.Component {

  render() {
    return (
        <Layout {...this.props}>
            <Router.RouteHandler {...this.props} />
        </Layout>
    );
  }
}

export default App;
