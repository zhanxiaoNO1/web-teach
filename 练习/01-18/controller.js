angular.module("myapp2", [])
	.controller("ctrl", function($scope, factory, value, constant, provider, service) {
		$scope.factory = factory.a /*2*/
		$scope.service = service.c /*1*/
		provider.fun()
		$scope.provider = b /*3*/
	})