'use strict';

import levelup from 'levelup';

var db = levelup('./data.db', {
  valueEncoding: 'json'
});

function save(key, value, callback) {
  db.put(key, value, callback);
}

function read(key, callback) {
  db.get(key, callback);
}

export function saveReposWithIssues(org, repos, callback) {
  save(org, {
    org: org,
    repos: repos
  }, callback);
}

export function readReposWithIssues(org, callback) {
  read(org, callback);
}
