//angular.module('starter.controllers', [])
//
//.controller('HomeCtrl', function($scope,$http,$rootScope,$ionicSlideBoxDelegate) {
//  $http.post($rootScope.URLAdmin+'/Handler/OfflineCourseHandler.ashx?action=indexshow')
//      .then(function (res) {
//          console.log(res.data);
//          $scope.lunbopics = res.data.data.bannerList;
//          console.log($scope.lunbopics);
//          
//          $ionicSlideBoxDelegate.$getByHandle("slideimgs").update();
//          $ionicSlideBoxDelegate.$getByHandle("slideimgs").loop("true");
//			$scope.homeGoodListRows=[
//			[res.data.data.goodList[0],res.data.data.goodList[1]],
//			[res.data.data.goodList[2],res.data.data.goodList[3]]
//			];
//      })
//})
//
//.controller('LessonlistCtrl', function($scope) {
// 
//})
//
//.controller('MycourseCtrl', function($scope) {
//
//})
//
//.controller('PersonalCtrl', function($scope) {
// 
//})
//
//.controller('AsdCtrl', function($scope) {
// 
//});


angular.module('starter.controllers', [])
.controller('HomeCtrl', function($scope,$http,$rootScope,$ionicSlideBoxDelegate) {
	$http.post($rootScope.URLAdmin+'/Handler/OfflineCourseHandler.ashx?action=indexshow')
	.then(function(res){
		$scope.lunbopics=res.data.data.bannerList;
		$ionicSlideBoxDelegate.$getByHandle("slideimgs").update();
		$ionicSlideBoxDelegate.$getByHandle("slideimgs").loop("true");
		$scope.listpics=res.data.data.goodList;
		$scope.listspics=res.data.data.newList;
		$scope.listspicss=res.data.data.chooseList;
		$scope.homeGoodlistRows=[
		[$scope.listpics[0],$scope.listpics[1]],
		[$scope.listpics[2],$scope.listpics[3]]
		]
		$scope.homeNewlistRows=[
		[$scope.listspics[0],$scope.listspics[1]],
		[$scope.listspics[2],$scope.listspics[3]]
		]
		$scope.homeChooselistRows=[
		[$scope.listspicss[0]],[$scope.listspicss[1]],
		[$scope.listspicss[2]],[$scope.listspicss[3]],
		[$scope.listspicss[4]],[$scope.listspicss[5]],
		[$scope.listspicss[6]],[$scope.listspicss[7]],
		[$scope.listspicss[0]],[$scope.listspicss[1]],
		[$scope.listspicss[2]],[$scope.listspicss[3]],
		[$scope.listspicss[4]],[$scope.listspicss[5]],
		[$scope.listspicss[6]],[$scope.listspicss[7]],
		[$scope.listspicss[0]],[$scope.listspicss[1]],
		[$scope.listspicss[2]],[$scope.listspicss[3]]
		]


	
	})
})

.controller('LessonlistCtrl', function($scope, $http,$rootScope,$ionicSlideBoxDelegate) {
	
	
	
	$http.post($rootScope.URLAdmin+'/Handler/OfflineCourseHandler.ashx?action=getcategory')
	.success(function(res){
		$scope.listcardtitle=res.data;
		$scope.ctrtru1=true;
		$scope.ctrtru2=true;
		$scope.onTap1=function(){
			$scope.ctrtru1=!$scope.ctrtru1;
			$scope.ctrtru2=true;
			if($scope.button1=="blue"){
				console.log(1)
				$scope.button1="";
				
			}else{
				$scope.button1="blue";
				$scope.button2="";
			}
		};
		$scope.onTap2=function(){
			$scope.ctrtru2=!$scope.ctrtru2;
			$scope.ctrtru1=true;
			if($scope.button2=="blue"){
				console.log(1)
				$scope.button2="";
				
			}else{
				$scope.button2="blue";
				$scope.button1="";
			}
		};
	})
	
	$scope.arrs=[
	{"img" :"img/Ncontact1.jpg",
				"name": "38客服",
				"price": 20},
				{"img" :"img/Ncontact1.jpg",
				"name": "38客服",
				"price": 20},
				{"img" :"img/Ncontact1.jpg",
				"name": "38客服",
				"price": 20},
				{"img" :"img/Ncontact1.jpg",
				"name": "38客服",
				"price": 20},
				{"img" :"img/Ncontact1.jpg",
				"name": "38客服",
				"price": 20},{"img" :"img/Ncontact1.jpg",
				"name": "38客服",
				"price": 20}
				
	]
})

.controller('MycourseCtrl', function($scope) {



})

.controller('PersonalCtrl', function($scope) {

});


