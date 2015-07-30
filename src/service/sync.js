'use strict';

import logger from './log'; // instantiate the logger
import {sync, fetchAll} from './index';
import {CronJob} from 'cron';

const CRON_TIME = '00 01 * * * *'; // run every hour

function onTick() {
  logger.info('cron:onTick');
  sync();
}

function onComplete() {
  logger.info('cron:onComplete');
}

logger.info('cron:instantiate');
new CronJob(CRON_TIME, onTick, onComplete, true, 'America/Los_Angeles');

// if the db is empty run the sync immediately
fetchAll(function(err, results) {

  if (err) {
    // using err to see if the records are there in db
    // figure out a better way to implement this
    // {"message":"Key not found in database [paypal]","name":"NotFoundError","stack":"NotFoundError: Key not found in database [paypal]\n    at
    logger.info(err);
    // start the sync to replenish db
    sync();
    return;
  }
});
