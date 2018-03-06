var fs = require('fs');
module.exports= {
    del:function(who){
   fs.unlink('3.text',function(err){
       if(err) throw err;
       console.log("好的")
   })
    },
    re:function(){
        fs.readFile('2.text','utf-8',function(err,data){
            console.log(data)
        })
    },
    wr:function(){
        fs.writeFile('1.text','0.text',function(err){
            if(err) throw err;
            console.log('写')
        })
    },
    copys:function(){
        fs.readFile('2.text','utf-8',function(err,data){
            console.log(data)
           fs.writeFile('4.text',data,function(err){
            if(err) throw err;
            console.log('新建4文本来复制2文本的内容')
           })
        })
    }
}