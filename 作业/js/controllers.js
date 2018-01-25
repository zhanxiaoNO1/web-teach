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

  .controller('LessonlistCtrl', function ($scope, $http, $rootScope) {
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

    $scope.loadPage = function () {
      $scope.moreData = false;
      var myData = {
        "searchText": "",
        "CategoryTwo": "",
        "CpriceId": "",
        "pageStart": $scope.pageStart
      }

      $http.post($rootScope.URLAdmin + "/Handler/OfflineCourseHandler.ashx?action=courseshow", myData)
        .then(function (res) {
          console.log(res.data);
          $scope.lists = $scope.lists.concat(res.data.data.list);
          $scope.totalpage = Math.ceil(res.data.data.count/res.data.data.pageSize);
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

    $scope.loadPage();//加载第一页数据
    
    $scope.loadMore = function () {
      $scope.pageStart = $scope.pageStart+1;
      // console.log($scope.pageStart);
      $scope.loadPage();
      $scope.$broadcast('scroll.infiniteScrollComplete')
    }

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
