angular.module('starter.services', [])

.factory('locals',['$window',function($window) {
		return{
			//存储单个属性
			set:function(key,value){
				$window.localStorage[key] = value;
			},
			//读取单个属性
			get:function(key,defaultValue){
				return $window.localStorage[key] || defaultValue;
			}
		}

}]);
//第二种
/*.service('locals',function(){
	//js设置永久缓存方法setItem("key","value")
	//sessionStorage.setItem("key","value")
	this.set = function(key,value){
		window.localStorage.setItem(key,value);
	};
	
	this.get = function(key,defaultValue){
		//js获取永久缓存方法getItem("key")
		//设置默认值是为了给别人使用该方法是根据需求设定
		return window.localStorage.getItem(key) || defaultValue
	}
})*/
