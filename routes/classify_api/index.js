var mymongo = require("mymongo1610");

function addclassify(req, res, next) { //添加类型
    var uid = req.body.uid; //用户id
    var icon = req.body.icon; //icon图标
    var type = req.body.type; //0支出 1收入 
    var cid = req.body.cid; //分类 
    if (!uid || !icon || !type || !cid) {
        return res.json({ code: 3, msg: "丢失参数" })
    }
    mymongo.insert("classify", { uid: uid, icon: icon, type: type, cid: cid }, function(err, result) {
        if (err) {
            return res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: result })
        }
    })
}
module.exports = {
    addclassify: addclassify
}