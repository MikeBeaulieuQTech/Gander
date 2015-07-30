'use strict';

import React from 'react';
import classNames from 'classnames';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchKey: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
  }

  onInputChange(event) {
    this.setState({
      searchKey: event ? event.target.value : ''
    });
    this.props.doSearch(this.state.searchKey);
  }

  onClearClick(event) {
    event.stopPropagation();
    var _this = this;
    _this.refs.searchInput.getDOMNode().blur();
    setTimeout(function() {
      _this.onInputChange();
      _this.refs.searchInput.getDOMNode().value = '';
    }, 0);
  }

  render() {

    let clearClasses = classNames('waves-effect waves-light btn gander-clear red accent-2', {
      hide: !this.state.searchKey
    });

    let searchInfoClasses = classNames('search-info', {
      hide: !this.state.searchKey
    });

    return(
      <div>
        <div className='input-field col s6 left'>
          <input ref='searchInput' onChange={this.onInputChange} id='icon_prefix' type='text' className='validate' />
          <label for='icon_prefix'>Search</label>
        </div>
        <span className={searchInfoClasses}>
          {this.props.searchReposCount} repos found
        </span>
        <a onClick={this.onClearClick} className={clearClasses}>
          Clear
        </a>
      </div>
    );
  }
}

export default Search;
