var mymongo = require("mymongo1610");

function addicon(req, res, next) { //添加icon
    var icon = req.body.icon; //icon图标 
    var timer = new Date().toLocaleString().split(' ')[0]; //消费时间
    if (!icon) {
        return res.json({ code: 3, msg: "丢失参数" })
    }
    mymongo.insert("iconlist", { icon: icon }, function(err, result) {
        if (err) {
            return res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: result })
        }
    })
}

function findicon(req, res, next) { //添加icon
    mymongo.find("iconlist", function(err, result) {
        if (err) {
            return res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: result })
        }
    })
}
module.exports = {
    addicon: addicon,
    findicon: findicon
}