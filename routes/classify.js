var express = require('express');
var router = express.Router();
var classify = require("./classify_api/index.js");

/* GET home page. */
router.post('/api/classify', classify.addclassify); //增加分类



module.exports = router;