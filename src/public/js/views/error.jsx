'use strict';

import React from 'react';

class ErrorPage extends React.Component {

  render() {
    return (
      <div className='error-page blue-grey lighten-5'>
        <i className='large mdi-alert-error'></i>
        <div className='heading'>Oops Something went wrong</div>
        <div>
          Error Message: {this.props.err.message}
        </div>
      </div>
    );
  }
}

export default ErrorPage;
