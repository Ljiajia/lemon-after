var mymongo = require("mymongo1610");
//通过用户名 查询账号
function getBill(req, res, next) {
    var uid = req.body.uid;
    mymongo.find("bill_list", { uid: uid }, function(err, result) {
        if (err) {
            return res.json({ code: 0, msg: err })
        } else {
            if (result.length != 0) {
                res.json({ code: 1, msg: result })
            } else {
                res.json({ code: 3, msg: "丢失参数" })

            }
        }
    })
}
//通过_id 查询账号
// function getBill(req, res, next) {
//     var _id = req.body._id;
//     mymongo.find("bill_list", { _id: _id }, function(err, result) {
//         if (err) {
//             return res.json({ code: 0, msg: err })
//         } else {
//             res.json({ code: 1, msg: result })
//         }
//     })
// }
//添加账单
function addBill(req, res, next) {
    var uid = req.body.uid; //用户id
    var icon = req.body.icon; //icon图标
    var type = req.body.type; //0支出 1收入
    var money = req.body.money; //金额
    var cid = req.body.cid; //分类
    var timer = new Date().toLocaleString().split(' ')[0]; //消费时间
    if (!uid || !icon || !type || !money || !cid || !timer) {
        return res.json({ code: 3, msg: "丢失参数" })
    }
    mymongo.insert("bill_list", { uid: uid, icon: icon, type: type, money: money, cid: cid, timer: timer }, function(err, result) {
        if (err) {
            return res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: result })
        }
    })
}
//删除账单
function removeBill(req, res, next) {
    var id = req.body._id;
    mymongo.delete("bill_list", { _id: id }, function(err, result) {
        if (err) {
            return res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: result })
        }
    })
}
module.exports = {
    getBill: getBill,
    addBill: addBill,
    removeBill: removeBill,
}