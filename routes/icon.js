var express = require('express');
var router = express.Router();
var icon = require("./icon_api/index.js")

/* GET home page. */
router.post('/api/addicon', icon.addicon); //添加icon
router.post('/api/findicon', icon.findicon); //添加icon


module.exports = router;