'use strict';

import React from 'react';

class Layout extends React.Component {

  render() {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport'
              content='width=device-width,
                  initial-scale=1.0,
                  minimum-scale=1.0,
                  maximum-scale=1.0,
                  minimal-ui'
              />
          <title>{this.props.data.title}</title>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/css/materialize.min.css' />
          <link rel='stylesheet' href='/css/app.css'/>
        </head>
        <body>
          <div className='container'>
              {this.props.children}
          </div>
          <footer className='page-footer'></footer>
        </body>
        <script src='https://code.jquery.com/jquery-2.1.4.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/js/materialize.min.js'></script>
        <script src='/js/bundle.js'></script>
      </html>
    );
  }
}

export default Layout;
