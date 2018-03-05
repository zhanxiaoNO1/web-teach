//同以目录下的文件更名：
var fs = require('fs');
fs.rename('11.txt','12.txt', function(err){
 if(err) throw err;
 console.log('已更名');
})
 
//不同路径下的文件更名 + 移动：（新的路径必须已存在，路径不存在会返回异常）
// var fs = require('fs');
// fs.rename('14.txt','new/13.txt', function(err){
//  if(err){
//   throw err;
//  }
//  console.log('done!');
// })