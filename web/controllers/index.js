'use strict';

import appJson from '../../../app.json';
import {fetchAll} from '../../service/index';

module.exports = function (router) {

  router.get('/', function (req, res) {

    fetchAll(function(err, results) {

      res.render(req.url, {
        err: err,
        data: {
          orgs: results,
          title: appJson.title
        }
      });
    });
  });

};

