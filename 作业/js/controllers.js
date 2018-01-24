angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$http,$rootScope,$ionicSlideBoxDelegate) {
	$http.post($rootScope.URLAdmin+'/Handler/OfflineCourseHandler.ashx?action=indexshow')
	.then(function(res){
		console.log(res.data)
		$scope.lunbopics=res.data.data.bannerList;
		console.log($scope.lunbopics)
		$ionicSlideBoxDelegate.$getByHandle("slideimgs").update();
		$ionicSlideBoxDelegate.$getByHandle("slideimgs").loop("true");
		
		//好评榜数据
		$scope.homeGoodlistRows = [
		[res.data.data.goodList[0],res.data.data.goodList[1]],
		[res.data.data.goodList[2],res.data.data.goodList[3]]
		];
		
		//最新课程数据
		$scope.homeNewLists = [
		[res.data.data.newList[0],res.data.data.newList[1]],
		[res.data.data.newList[2],res.data.data.newList[3]]
		];
		
		//猜你喜欢数据
		$scope.homechooseLists = res.data.data.chooseList;
	})
})


/*.controller('AsdCtrl', function($scope) {})*/

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
				"img":"img/01.jpg",
				"name":"轻轻",
				"price":18
			},
			{
				"img":"img/02.jpg",
				"name":"娃娃",
				"price":17
			},
			{
				"img":"img/03.jpg",
				"name":"娥娥",
				"price":16
			},
			{
				"img":"img/04.jpg",
				"name":"然然",
				"price":19
			},{
				"img":"img/05.jpg",
				"name":"婷婷",
				"price":20
			},{
				"img":"img/06.jpg",
				"name":"uu",
				"price":23
			},{
				"img":"img/07.jpg",
				"name":"飘飘",
				"price":21
			}
		];
	$scope.dataq=arr;
	})
  


.controller('MycourseCtrl', function($scope, $stateParams, Chats) {
		$scope.chat = Chats.get($stateParams.chatId);
  
		  $scope.data= {
		    showDelete: false
		  };
		  
		  $scope.edit = function(item) {
		    alert('Edit Item: ' + item.id 

);
		  };
		  $scope.share = function(item) {
		    alert('Share Item: ' + item.id 

);
		  };
		  
		  $scope.moveItem = function(item, fromIndex, toIndex) {
		    $scope.items.splice(fromIndex, 1);
		    $scope.items.splice(toIndex, 0, item);
		  };
		  
		  $scope.onItemDelete = function(item) {
		    $scope.items.splice($scope.items.indexOf(item), 1);
		  };
  
	  $scope.items = [
	    {"img":"img/01.jpg",
		 "name":"轻轻",
		 "price":18 },
	    { "img":"img/02.jpg",
				"name":"娃娃",
				"price":17 },
	    { "img":"img/03.jpg",
				"name":"娥娥",
				"price":16 },
	    { "img":"img/04.jpg",
				"name":"然然",
				"price":19 },
	    { "img":"img/05.jpg",
				"name":"婷婷",
				"price":20 },
	    { "img":"img/06.jpg",
				"name":"uu",
				"price":23 },
	    { "img":"img/07.jpg",
				"name":"飘飘",
				"price":21 },
	    { "img":"img/01.jpg",
		 		"name":"轻轻",
		 		"price":18 },
	    { "img":"img/03.jpg",
				"name":"娥娥",
				"price":16 },
	    { "img":"img/05.jpg",
				"name":"婷婷",
				"price":20 },
	    { "img":"img/06.jpg",
				"name":"uu",
				"price":23 },
	    { "img":"img/07.jpg",
				"name":"飘飘",
				"price":21 }
	 
  		];
  		
	})

.controller('PersonalCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
