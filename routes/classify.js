var express = require('express');
var router = express.Router();
var classify = require("./classify_api/index.js");

/* GET home page. */
router.post('/api/addclassify', classify.addclassify); //增加分类
router.post('/api/findclassify', classify.findclassify); //增加分类




module.exports = router;