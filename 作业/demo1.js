
var mongo = require('mongodb');//引入模块

var MongoClient=mongo.MongoClient;//mongodb 客户端

var url='mongodb://127.0.0.1:27017';//mongodb服务器地址
var dbName = 'll'



MongoClient.connect(url,function(err,client){//client  链接服务器
	if(err)throw  err;
	var db=client.db(dbName)//链接数据库
	var collection = db.collection('ll')//链接数据库里面的集合
	
	
	
	/*
	 
	 * 删除：deleteOne()
	 * 查询：find   findOne
	 * 更新：updateOne()  updateMany()  update()
	 * 
	 * */
	/*增加一条数据
	 * collection.insert({name:'我是打酱油的',age:0},function(err,result){
		if(err)throw err;
		
		console.log(result);
		client.close();//释放链接
		
	})*/
	
	/*删除
	 * collection.deleteOne({name:'我是打酱油的',age:0},function(err,result){
		if(err)throw err;
		
		console.log(result);
		client.close();//释放链接
		
	})
	*/
	//查找
	/*collection.find({},function(err,result){
		if(err)throw err;
		
		console.log(result);
		client.close();//释放链接
		
	})
	查找一个
	collection.findOne({name:'bobo0',age:'10'},function(err,result){
		if(err)throw err;
		
		console.log(result);
		client.close();/释放链接
		
	})
	/*增加一个字段
	 * collection.update({name:'bobo0'},{$set:{sex:'man'}},function(err,result){
		if(err)throw err;
		
		console.log(result);
		client.close();//释放链接
		
	})*/
	
	
	/*多个增加
	 * collection.updateMany({age:"10"},{$set:{sex:'woman'}},function(err,result){
		if(err)throw err;
		
		console.log(result);
		client.close();//释放链接
		
	})*/
	/*只增加一个
	 * collection.updateOne({age:"10"},{$set:{sex:'man'}},function(err,result){
		if(err)throw err;
		
		console.log(result);
		client.close();//释放链接
		
	})*/
})
