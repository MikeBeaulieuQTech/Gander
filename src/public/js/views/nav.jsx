'use strict';

import React from 'react';

class Nav extends React.Component {

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <div className='left heading'>{this.props.title}</div>
          <div className='right reposcount'>{this.props.reposCount} repositories in total</div>
        </div>
      </nav>
    );
  }
}

export default Nav;
