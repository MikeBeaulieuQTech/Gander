'use strict';

import React from 'react';
import Nav from './nav.jsx';
import Card from './card.jsx';
import Search from './search.jsx';
import Dropdown from './dropdown.jsx';
var ErrorPage = require('./error.jsx');

var Index = React.createClass({

  componentWillMount: function() {
    this.doSearch = this.doSearch.bind(this);
    this.doSortBy = this.doSortBy.bind(this);

    if (!this.props.err) {
      let repos = this.props.data.orgs[0].repos;
      this.setState({
        repos: repos
      });
    }
  },

  doSearch: function(key) {

    if (!key) {
      this.setState({
        repos: this.props.data.orgs[0].repos
      });
      return;
    }

    let repos = this.props.data.orgs[0].repos.filter(function(repo) {

      return (new RegExp(key, 'i')).test(repo.name) ||
              (new RegExp(key, 'i')).test(repo.language);
    });

    this.setState({
      repos: repos
    });
  },

  doSortBy: function(type) {
    var repos = this.props.data.orgs[0].repos;
    if (type === 'pull_requests') {
      repos.sort(function(repoA, repoB) {
        return repoA.computed.pull_requests.length < repoB.computed.pull_requests.length;
      });
    }
    else if (type === 'issues') {
      repos.sort(function(repoA, repoB) {
        return repoA.computed.issues.length < repoB.computed.issues.length;
      });
    }
    else if (type === 'stars_count') {
      repos.sort(function(repoA, repoB) {
        return repoA.stargazers_count < repoB.stargazers_count;
      });
    }
    else {
      console.log('unknown sort type: ' + type);
    }
    this.setState({
      repos: repos
    });
  },

  render: function() {

    if (this.props.err) {
      return (
        <div>
          <Nav title={this.props.data.title} />
          <ErrorPage err={this.props.err} />
        </div>
      );
    }

    let org = this.props.data.orgs[0];

    return(
      <div>
        <Nav title={this.props.data.title} reposCount={org.repos.length} />
        <div className='row search'>
          <Search doSearch={this.doSearch} searchReposCount={this.state.repos.length} />
          <Dropdown doSortBy={this.doSortBy} />
        </div>
        <div className='row'>
          {this.state.repos.map(function(repo) {
              return <div className='col s4'><Card {...repo} /></div>
          })}
        </div>
      </div>);
  }
});

export default Index;
