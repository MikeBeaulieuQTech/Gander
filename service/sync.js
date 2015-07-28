'use strict';

import logger from './log'; // instantiate the logger
import {sync} from './index';

logger.debug('starting sync');
sync();
