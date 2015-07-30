'use strict';

import logger from './log';
import levelup from 'levelup';

const DB_NAME = 'data.db';

var db;

try {
  db = levelup('./' + DB_NAME, {
    valueEncoding: 'json'
  });
  }
catch (err) {
  logger.error('ERROR_IN_DB_OPEN');
  logger.info(err);
}

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
