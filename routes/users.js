var express = require('express');
var router = express.Router();
var userlist = require("./user_api/index.js")

/* GET home page. */
router.post('/api/userlist', userlist.adduser); //增加用户
router.post('/api/finduserlist', userlist.finduser); //查找用户


module.exports = router;