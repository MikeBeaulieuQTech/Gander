'use strict';

import React from 'react';
import classNames from 'classnames';

class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.sortByIssues = this.sortByIssues.bind(this);
    this.sortByPRs = this.sortByPRs.bind(this);
    this.sortByStars = this.sortByStars.bind(this);
  }

  sortByPRs(event) {
    event.stopPropagation();
    event.preventDefault();
    this.props.doSortBy('pull_requests');
  }

  sortByIssues(event) {
    event.stopPropagation();
    event.preventDefault();
    this.props.doSortBy('issues');
  }

  sortByStars(event) {
    event.stopPropagation();
    event.preventDefault();
    this.props.doSortBy('stars_count');
  }

  render() {

    return(
      <div className='col s6'>
        <a className='dropdown-button btn sortby'
          href='#'
          data-constrainwidth='false'
          data-activates='dropdown1'>sort by</a>

        <ul id='dropdown1' className='dropdown-content'>
          <li><a href='#!' onClick={this.sortByIssues}>issues count</a></li>
          <li><a href='#!' onClick={this.sortByPRs}>pull requests count</a></li>
          <li><a href='#!' onClick={this.sortByStars}>stars count</a></li>
        </ul>
      </div>
    );
  }
}

export default DropDown;
