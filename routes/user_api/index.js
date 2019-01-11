var mymongo = require("mymongo1610");

function adduser(req, res, next) { //新增用户名
    var nick_name = req.body.nick_name || '';
    if (nick_name) {
        mymongo.insert("userlist", { "nick_name": nick_name }, function(err, result) {
            if (err) {
                return res.json({ code: 0, msg: "服务器错误" })
            } else {
                res.json({ code: 1, msg: result.insertedId })
            }
        })
    }
}

function finduser(req, res, next) { //查找用户名，返回匹配项  
    var nick_name = req.body.nick_name || '';
    if (nick_name) {
        mymongo.find("userlist", { "nick_name": nick_name }, function(err, result) {
            if (err) {
                return res.json({ code: 0, msg: "服务器错误" })
            } else {
                res.json({ code: 1, msg: result })
            }
        })
    }
}
module.exports = {
    adduser: adduser,
    finduser: finduser
}