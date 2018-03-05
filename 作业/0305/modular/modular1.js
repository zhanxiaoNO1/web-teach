var fs = require("fs")

module.exports = {
    //写入
    wri: function (who,what) {
        fs.writeFile(who,what,function (err) {
            if (err) console.log(err);
            console.log('写入成功')
        })
    },
    //读取
    rea: function (who) {
        fs.unlink(who, function (err) {
            if (err) console.log(err);
            console.log('读取成功')
        })
    },
    //删除
    del: function (who) {
        fs.unlink(who, function (err) {
            if (err) console.log(err);
            console.log('删除成功')
        })
    },
    //修改名称
    ren:function(who,what){
        fs.rename(who, what, function (err) {
            if (err) throw err;
            console.log('修改文件成功')
        })
    }
}
