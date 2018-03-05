//复制文件内容
var fs = require('fs');
//先读后写
fs.readFile('main.js','utf-8',function(err,data){
    if(err) throw err;
    fs.writeFile('act.txt',data,function(err){
        if(err) throw err;
        console.log('写进去了')
    })
})