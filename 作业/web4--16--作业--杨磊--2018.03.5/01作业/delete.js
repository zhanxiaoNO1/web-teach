var fs=require('fs');
fs.unlink('abc.html',function(err){
    if(err) throw err;
    console.log('文件已删除')
})