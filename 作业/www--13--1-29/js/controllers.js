angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $http, $rootScope, $ionicSlideBoxDelegate, locals, shareDate) {

	$scope.doSearch = function() {
		console.log(333)
		shareDate.set('search', $scope.serchText)
		window.location.href = '#/tab/lessonlist'
	}

	if(!locals.get('isLoad')) {
		window.location.href = '#/tab/firstEnter'
	}

	$http.post($rootScope.URLAdmin + '/Handler/OfflineCourseHandler.ashx?action=indexshow')
		.then(function(res) {
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

.controller('LessonlistCtrl', function(shareData, $scope, $http, $rootScope) {

	if(shareDate.get('search')) {
		console.log(111)
		$scope.serchText = shareDate.get('search')

	}

	$scope.priceBtns = [{
		id: 0,
		btnName: "全部"
	}, {
		id: 1,
		btnName: "免费"
	}, {
		id: 2,
		btnName: "收费"
	}];

	$scope.courseList = function() {
		$http.post($rootScope.URLAdmin + '/Handler/OfflineCourseHandler.ashx?action=getcategory', "")
			.then(function(res) {
				console.log(res.data);

				if(res.data.err) {
					console.log("请求失败，原因：" + res.data.err);
				};

				$scope.courseListBtns = res.data.data;
			})

		$scope.l = !$scope.l;
		$scope.p = false;

	};

	$scope.priceList = function() {
		$scope.priceBtns = $scope.priceBtns;
		$scope.p = !$scope.p;
		$scope.l = false;
	}

	$scope.pageStart = 0;
	$scope.lists = [];
	$scope.searchText = '';
	$scope.CategoryTwo = '';
	$scope.CpriceId = '';

	// $scope.$on("$ionicView.enter", function () {
	//   console.log(1);

	//判断是否从首页过来的，是就获取这个shareData的值
	console.log(shareData.get("search"));
	if(shareData.get("search")) {
		console.log(shareData.get("search"));
		// 把shareData的值赋值给$scope.searchText，
		// 用于筛选数据
		$scope.searchText = shareData.get("search");
		shareData.set("search", "");
	}
	// })

	$scope.moreData = true;

	// 搜索键盘方法
	$scope.myKeyup = function(e) {
		var keycode = window.event ? e.keyCode : e.which;
		if(keycode == 0 || keycode == 13) {
			$scope.searchList($scope.searchInputText, '', '');
		}
	}

	//加载页面的方法
	$scope.loadPage = function() {
		//去除上拉加载的标签，以取消上拉加载作用
		// 如果不取消，$http是异步请求，会挂起请求，直接运行后面代码
		$scope.moreData = false;

		var myData = {
			"searchText": $scope.searchText,
			"CategoryTwo": $scope.CategoryTwo,
			"CpriceId": $scope.CpriceId,
			"pageStart": $scope.pageStart
		}

		// debugger;

		$http.post($rootScope.URLAdmin + "/Handler/OfflineCourseHandler.ashx?action=courseshow", myData)
			.then(function(res) {
				// $scope.moreData = false;
				console.log(res.data);
				// $scope.lists = res.data.data.list
				$scope.lists = $scope.lists.concat(res.data.data.list);
				$scope.totalpage = Math.ceil(res.data.data.count / res.data.data.pageSize);
				$scope.pageStart = res.data.data.pageStart;
				console.log(res.data.data.list);
				// console.log($scope.totalpage);
				// console.log($scope.pageStart);

				if($scope.totalpage > $scope.pageStart) {
					// debugger;
					$scope.moreData = true;
					console.log('已加载');
				}

			})
	}

	// 上拉加载方法
	$scope.loadMore = function() {
		$scope.pageStart = $scope.pageStart + 1;
		// debugger;
		$scope.loadPage();
		$scope.$broadcast('scroll.infiniteScrollComplete')
	}

	// 防止页面加载两次
	$scope.inRun = true;
	$scope.$on('$stateChangeSuccess', function() {
		//var num = $scope.num + 1;
		console.log("$stateChangeSuccess事件触发次");
		if($scope.inRun) {
			// debugger;
			$scope.loadMore();
			$scope.inRun = false;
		} else {
			$scope.inRun = true;
		}
	});

	//搜索筛选通用方法
	$scope.searchList = function(searchText, coruseId, CpriceId) {

		$scope.searchText = searchText;
		$scope.CategoryTwo = coruseId;
		$scope.CpriceId = CpriceId;
		$scope.moreData = true;

		$scope.pageStart = 0;
		$scope.lists = [];

		// debugger;

		$scope.loadMore();
	}

	// 下拉刷新方法
	$scope.doRefresh = function() {
		$scope.searchList('', '全部', '');
		$scope.$broadcast('scroll.refreshComplete')
	}
})

.controller('MycourseCtrl', function($scope) {})

.controller('PersonalCtrl', function($scope, $http, $rootScope) {

	//添加以下内容
	$scope.loginuse = {
		name: '',
		password: ''
	};

	$scope.uname = "1121"

	$scope.doLogin = function() {
		console.log($scope.uname);
		var userData = {
			"userName": $scope.uname,
			"userPwd": $scope.upwd
		};

		$http.post($rootScope.URLAdmin + "/Handler/UserHandler.ashx?action=login", userData)
			.then(function(res) {
				console.log(res.data);

				if(res.data.success) {
					window.location.href = "#/tab/information";
				}
			})
	}
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
	.controller("InformationCtrl", function($scope) {

	})

.controller("RegisterCtrl", function($scope, $http, $rootScope) {

	$scope.infor = {
		name: "",
		email: "",
		phone: "",
		password: "",
		passwordt: ""
	}

	$scope.register = function(infor) {

		var userData = {
				"userName": $scope.infor.name,
				"email": $scope.infor.email,
				"phone": $scope.infor.phone,
				"userPwd": $scope.infor.password,
				"userPic": ""
			}
			// /Handler/UserHandler.ashx?action=add
		$http.post($rootScope.URLAdmin + "/Handler/UserHandler.ashx?action=add", userData)
			.then(function(res) {
				if(res.data.success) {
					console.log(res.data.data);
					window.location.href = "#/tab/personal";
				}
			})
	}

})

.directive("hideTabs", function($rootScope) {
	return {
		restrict: "A",
		link: function(scope, el, attrs) {

			if(attrs.hideTabs == "false") {
				$rootScope.hideTabs = false;
			} else {
				$rootScope.hideTabs = true;
			}

			console.log($rootScope.hideTabs);
		}
	}
})

.controller('firstCtrl', function($scope, locals) {
	$scope.toIndex = function() {
		locals.set('isLoad', 'isLoad')
		window.location.href = '#/tab/home'
	}

})