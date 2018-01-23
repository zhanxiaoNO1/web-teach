angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$http,$rootScope,$ionicSlideBoxDelegate) {
	$http.post($rootScope.URLAdmin+'/Handler/OfflineCourseHandler.ashx?action=indexshow')
	.then(function(res){
		console.log(res.data)
		$scope.lunbopics=res.data.data.bannerList;
		console.log($scope.lunbopics)
		$ionicSlideBoxDelegate.$getByHandle("slideimgs").update();
		$ionicSlideBoxDelegate.$getByHandle("slideimgs").loop("true");
	})
})


/*.controller('AsdCtrl', function($scope) {})*/

.controller('LessonlistCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('MycourseCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('PersonalCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
