const express = require('express');
const router = express.Router();
const {processRoutePath} = require('./_helpers/route-path-precessor'); 

processRoutePath(router,__dirname);

module.exports = router;