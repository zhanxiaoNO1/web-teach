angular.module('starter.services', [])


.factory('locals',['$window',function($window){
	return{
		set:function(key,value){
			$window.localStorage[key] = value;
		},
		get:function(key,defaultValue){
			return $window.localStorage[key] || defaultValue
		}
	}
}])

.factory('shareDate',function(){
	var allDate = '';
	return{
		set:function(key,value){
			allDate[key] = value
		},
		get:function(key,defaultValue){
			return allDate[key] || defaultValue
		}
	}
})
