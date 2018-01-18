angular.module("appCtrl",["appX"])
.controller("myCtrl",function($scope,$http){
	/*$http.get("date.json").then(function(res){
		console.log(res)
		$scope.res = res.data
	}).then(function(res){
		console.log(res)
	});*/
	$http({
		method:get,
		url:"请求路径",
		params:{}
	}).then(function success(res){
		console.log(res)
	},function errev(res){
		console.log(res)
	})
})