'use strict';

import React from 'react';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    window.open(this.props.html_url, '_blank');
  }

  render() {
    return (
      <div onClick={this.onClick} className='card small blue-grey darken-1 z-depth-2'>
        <div className='card-content white-text'>
          <span className='card-title truncate'>{this.props.name}</span>
          <p>{this.props.computed.pull_requests.length} pull requests</p>
          <p>{this.props.computed.issues.length} issues</p>
        </div>
        <div className='card-action'>
          <div>{this.props.stargazers_count} Stars</div>
          <div>{this.props.forks_count} Forks</div>
        </div>
      </div>
    );
  }
}

export default Card;
