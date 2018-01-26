
angular.module('starter.controllers', [])
.controller('HomeCtrl', function($scope,locals,$http,$rootScope,$ionicSlideBoxDelegate) {
	
	if(!locals.get("isload")){
		window.location.href='#/tab/lunbo';
	}
	
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
		$scope.homechooseLists = res.data.data.chooseList;

	
	})
})

.controller('LessonlistCtrl', function($scope, $http,$rootScope,$ionicSlideBoxDelegate) {
	
	$scope.pricetitle=[
	{
		id:0,
		pricename:"全部"
	},
	{
		id:1,
		pricename:"免费"
	},
	{
		id:0,
		pricename:"收费"
	}
	]
	
	$http.post($rootScope.URLAdmin+'/Handler/OfflineCourseHandler.ashx?action=getcategory')
	.success(function(res){
		$scope.listcardtitle=res.data;
		$scope.ctrtru1=true;
		$scope.ctrtru2=true;
		$scope.onTap1=function(){
			$scope.ctrtru1=!$scope.ctrtru1;
			$scope.ctrtru2=true;
			$scope.aup=!$scope.ctrtru1;
			$scope.bup=false
			
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
			$scope.bup=!$scope.ctrtru2;
			$scope.aup=false
			if($scope.button2=="blue"){
				console.log(1)
				$scope.button2="";
				
			}else{
				$scope.button2="blue";
				$scope.button1="";
			}
		};
	})
	
	$scope.page;
	$scope.pageStart=1;
	$scope.lists=[];
	$scope.moreData=true;
	
	$scope.loadPage=function(){
		$scope.moreData=false
	var	myData={
		"searchText":"",
		"CategoryTwo":"",
		"CpriceId":"",
		"pageStart":$scope.pageStart

	}
	
	$http.post($rootScope.URLAdmin+'/Handler/OfflineCourseHandler.ashx?action=courseshow',myData)
	.then(function(res){
			$scope.lists=$scope.lists.concat(res.data.data.list);
			$scope.page=Math.ceil(res.data.data.count/res.data.data.pageSize);
			$scope.pageStart=res.data.data.pageStart;
	})
	}
	if($scope.page>$scope.pageStart){
		$scope.moreData=true;
	}
	$scope.loadPage();
	$scope.loadMore=function(){
		$scope.pageStart+=1
		$scope.loadPage();
		$scope.$broadcast('scroll.infiniteScrollComplete')
	}
})


.controller('MycourseCtrl', function($scope) {



})

.controller('PersonalCtrl', function($scope) {

})
 .controller('lunboCtrl', function ($scope,locals) {
// 当用户第一次进入app时展示广告页； 
//进入home页后直接跳转到广告页； 
//在localstoage//sessionstoage 储存值  
//在home页获取缓存值，判断是否进入主页
$scope.toIndex=function(){
	locals.set("isload","isload");
	window.location.href= "#/tab/home"
}

  })
 .directive("hideTabs",function($rootScope){
	return{
		restrict:"A",
		link:function(scope,el,attrs){
			if(attrs.hideTabs=="false"){
				$rootScope.hideTabs=false;
			}else{
				$rootScope.hideTabs=true;
			}
			console.log($rootScope.hideTabs)
		}
	}
});


