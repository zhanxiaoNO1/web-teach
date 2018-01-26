angular.module('starter.services', [])


	//js设置永久缓存方法setItem("key",value)
	//sessionstorage.setItem("key",value)
//	.service('local',function(){
//	this.set=function(key,value){
//		window.localStorage.setItem(key,value);
//	};
//	this.get=function(key,defaultValue){
//		return window.localStorage.getItem(key)||defaultValue
//	}
//})	


.factory('locals', function($window) {
 return{
 	//存储单个属性
 	set:function(key,value){
 		$window.localStorage[key]=value;
 	},
 	//读取单个属性
 	get:function(key,defaultValue){
 		return $window.localStorage[key]||defaultValue;
 	}
 }
 
});
