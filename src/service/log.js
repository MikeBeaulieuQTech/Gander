'use strict';

import bunyan from 'bunyan';
import {normalize} from 'path';

const LOG_PATH = normalize(process.cwd() + '/logs/gander-service.log');

// for verification purposes
console.log('LOG_PATH is ' + LOG_PATH);

var logger = bunyan.createLogger({
  name: 'gander-service',
  streams: [
    {
      level: 'info',
      stream: process.stdout
    },
    {
      level: 'error',
      type: 'rotating-file',
      period: '1d',
      count: 10,
      path: LOG_PATH
    }
  ]
});

export default logger;
