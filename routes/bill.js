var express = require('express');
var router = express.Router();
var bill = require("./bill_api/index.js");

/* GET home page. */
router.post('/api/getbill', bill.getBill); //获取账单
router.post('/api/addbill', bill.addBill); //添加账单
router.post('/api/removebill', bill.removeBill); //删除账单



module.exports = router;