
angular.module('starter.controllers', [])
.controller('HomeCtrl', function(shareData,$scope,locals,$http,$rootScope,$ionicSlideBoxDelegate) {
	//通过判断浏览器中是否有isload缓存值，决定是否跳转页面
	
	
//	$scope.$on("$ionicView.beforeEnter",function(){
//		$rootScope.hideTabs=true;
//	});
//	
	
	if(!locals.get("isload")){
		window.location.href='#/tab/lunbo';
	}
	
	
$scope.myKeyup = function(e) {
			var keycode = window.event ? e.keyCode : e.which;
			if(keycode == 0 || keycode == 13) {
				shareData.set("search", $scope.searchText);
				window.location.href = "#/tab/lessonlist"
				$scope.searchText = "";
			}
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

.controller('LessonlistCtrl', function ($scope, shareData,$http, $rootScope) {
    $scope.priceBtns = [{
        id: 0,
        btnName: "全部"
      },
      {
        id: 1,
        btnName: "免费"
      },
      {
        id: 2,
        btnName: "收费"
      }
    ];

    $scope.courseList = function () {
      $http.post($rootScope.URLAdmin + '/Handler/OfflineCourseHandler.ashx?action=getcategory', "")
        .then(function (res) {
          console.log(res.data);

          if (res.data.err) {
            console.log("请求失败，原因：" + res.data.err);
          };

          $scope.courseListBtns = res.data.data;
        })

      $scope.l = !$scope.l;
      $scope.p = false;

    };

    $scope.priceList = function () {
      $scope.priceBtns = $scope.priceBtns;
      $scope.p = !$scope.p;
      $scope.l = false;
    }

    $scope.pageStart = 1;
    $scope.lists = [];
    $scope.moreData = true;
    
    $scope.searchText = "";
		$scope.CategoryTwo = "";
		$scope.CpriceId = "";
    //搜索筛选通用方法
    $scope.searchList = function (searchText, coruseId, CpriceId) {
      $scope.searchText = searchText;
      $scope.CategoryTwo = coruseId;
      $scope.CpriceId = CpriceId;

      $scope.pageStart = 0;
      $scope.lists = [];

      $scope.loadPage();
    }
if(shareData.get("search")) {
		$scope.searchText = shareData.get("search");
		shareData.set("search", "")
	}

$scope.moreData = true
		//			一个让你获取数据的接口
		//			规定的有字段名,根据字段名会传给你不同的值
    // 搜索键盘方法
    $scope.myKeyup = function (e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 0 || keycode == 13) {
        $scope.searchList($scope.searchInputText, '', '');
      }
    }

    //加载页面的方法
    $scope.loadPage = function () {
      //去除上拉加载的标签，以取消上拉加载作用
      // 如果不取消，$http是异步请求，会挂起请求，直接运行后面代码
      $scope.moreData = false;

      var myData = {
        "searchText": $scope.searchText,
        "CategoryTwo": $scope.CategoryTwo,
        "CpriceId": $scope.CpriceId,
        "pageStart": $scope.pageStart
      }

      $http.post($rootScope.URLAdmin + "/Handler/OfflineCourseHandler.ashx?action=courseshow", myData)
        .then(function (res) {
          // $scope.moreData = false;
          console.log(res.data);
          // $scope.lists = res.data.data.list
          $scope.lists = $scope.lists.concat(res.data.data.list);
          $scope.totalpage = Math.ceil(res.data.data.count / res.data.data.pageSize);
          $scope.pageStart = res.data.data.pageStart;
          console.log(res.data.data.list);
          // console.log($scope.totalpage);
          // console.log($scope.pageStart);


          if ($scope.totalpage > $scope.pageStart) {
            $scope.moreData = true;
            console.log('已加载');
          }

        })
    }

    $scope.loadPage(); //加载第一页数据

    // 上拉加载方法
    $scope.loadMore = function () {
      $scope.pageStart = $scope.pageStart + 1;
      // console.log($scope.pageStart);
      $scope.loadPage();
      $scope.$broadcast('scroll.infiniteScrollComplete')
    }

    // 防止页面加载两次
    // $scope.inRun = true;
    // $scope.$on('$stateChangeSuccess', function () {
    //   //var num = $scope.num + 1;
    //   console.log("$stateChangeSuccess事件触发次");
    //   if (!$scope.inRun) {
    //     $scope.loadMore();
    //     $scope.inRun = false;
    //   } else {
    //     $scope.inRun = true;
    //   }
    // });


    // 下拉刷新方法
    $scope.doRefresh = function () {
      $scope.searchList('','全部','');
      $scope.$broadcast('scroll.refreshComplete')
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
};

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


