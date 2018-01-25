angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$http,$rootScope,$ionicSlideBoxDelegate) {
	$http.post($rootScope.URLAdmin+'/Handler/OfflineCourseHandler.ashx?action=indexshow')
		.then(function(res){
			//console.log(res.date);
			$scope.lunbopics = res.data.data.bannerList;
			$ionicSlideBoxDelegate.$getByHandle("slideimgs").update();
			$ionicSlideBoxDelegate.$getByHandle("slideimgs").loop("true");
			
			$scope.goodList = [
						[res.data.data.goodList[0], res.data.data.goodList[1]],
						[res.data.data.goodList[2], res.data.data.goodList[3]]
					]
					$scope.newList = [
						[res.data.data.newList[0], res.data.data.newList[1]],
						[res.data.data.newList[2], res.data.data.newList[3]]
					]
					$scope.chooseList = res.data.data.chooseList;
		})
		
	
})

	
.controller('LessonlistCtrl', function($scope,$http,$rootScope) {
	$http.post($rootScope.URLAdmin+'/Handler/OfflineCourseHandler.ashx?action=getcategory')
	.then(function(res){
		console.log(res.data)
		$scope.lessons=[
		[res.data.data[0],res.data.data[1],res.data.data[2],res.data.data[3]],
		[res.data.data[4],res.data.data[5],res.data.data[6],res.data.data[7]],
		[res.data.data[8],res.data.data[9],res.data.data[10],res.data.data[11]],
		[res.data.data[12],res.data.data[13],res.data.data[14],res.data.data[15]],
		[res.data.data[16],res.data.data[17],res.data.data[18],res.data.data[19]],
		[res.data.data[20],res.data.data[21]]
		];
		
	})
  	var arr1=["全部","免费","收费"]
		$scope.datas=arr1;
		
		$scope.myoj = {}
		$scope.myojj={}
		$scope.aa = function(){
				$rootScope.cccc = !$rootScope.cccc
				$rootScope.dddd = false
				$scope.myobj={
					"color":"green"
				}
				$scope.myojj={}
			};
		 

		$scope.bb = function() {
				$rootScope.dddd = !$rootScope.dddd
				$rootScope.cccc = false
				$scope.myojj={
					"color":"green"
				}
				$scope.myobj={}
			};	
			
			
	var arr=[
			{
				"img":"img/timg.jpg",
				"name":"轻轻",
				"price":18
			},
			{
				"img":"img/timg1.jpg",
				"name":"娃娃",
				"price":17
			},
			{
				"img":"img/timg2.jpg",
				"name":"娥娥",
				"price":16
			},
			{
				"img":"img/timg3.jpg",
				"name":"然然",
				"price":19
			},{
				"img":"img/timg1.jpg",
				"name":"婷婷",
				"price":20
			},{
				"img":"img/timg1.jpg",
				"name":"uu",
				"price":23
			},{
				"img":"img/timg1.jpg",
				"name":"飘飘",
				"price":21
			}
		];
	$scope.dataq=arr;
	
	
	
})


.controller('MycourseCtrl', function($scope, $stateParams, Chats, $http, $rootScope) {
	$scope.chat = Chats.get($stateParams.chatId);

	/*--------------------------------借用的chooseList里面的参数----------------------------------*/
	$http.post($rootScope.URLAdmin + '/Handler/OfflineCourseHandler.ashx?action=indexshow') //
		.then(function(res) { //
			console.log(res); //
			$scope.chooseList = res.data.data.chooseList; //
		}) //
		/*--------------------------------------------------------------------------------------------*/

})

.controller('PersonalCtrl', function($scope) {
			$scope.settings = {
				enableFriends: true
			};
			
})
.controller("DengluCtrl",function($scope, $stateParams, Chats, $http, $rootScope){
	
})
.controller("WangleCtrl",function($scope, $stateParams, Chats, $http, $rootScope){
	
})