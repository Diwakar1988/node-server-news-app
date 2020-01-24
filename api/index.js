const express = require('express');
const router = express.Router();
const processRoutePath = require('../api/_helpers/route-path-processor'); 

processRoutePath(router,__dirname);

module.exports = router;