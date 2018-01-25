// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
/*用于修改安卓tab居下 （在参数里要加入$ionicConfigProvider）*/
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    /*用于修改安卓tab居下 --结束*/

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // abstract state for the tabs directive
  //.state是路由设置方法
 /* 第一个参数是该路由的状态名  自己起
  第二个参数是一个配置对象
  配置对象中{
  	url设置该路由跳转路径
  	之后的路由跳转可通过状态名和路径两种方式跳转
  	abstract抽象该路由,作为根路由
  }*/
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
    /*设置模板页面路径*/
  })

  // Each tab has its own nav history stack:
	//views是设置该视图加载到哪个视图容器中,类型为对象
	//其中，有一个属性为视图容器名
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
	
	/*.state('tab.asd',{
		url:'/asd',
		views:{
			'tab-home':{
				templateUrl:'templates/tab-asd.html',
				controller:'AsdCtrl'
			}
		}
	})*/
	
  .state('tab.lessonlist', {
      url: '/lessonlist',
      views: {
        'tab-lessonlist': {
          templateUrl: 'templates/tab-lessonlist.html',
          controller: 'LessonlistCtrl'
        }
      }
    })
    .state('tab.mycourse', {
      url: '/mycourse',
      views: {
        'tab-mycourse': {
          templateUrl: 'templates/tab-mycourse.html',
          controller: 'MycourseCtrl'
        }
      }
    })

  .state('tab.personal', {
    url: '/personal',
    views: {
      'tab-personal': {
        templateUrl: 'templates/tab-personal.html',
        controller: 'PersonalCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
