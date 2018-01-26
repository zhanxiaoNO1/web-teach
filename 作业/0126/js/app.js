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

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  
//.state是路由设置方法
//第一个参数,是路由状态名
//第二个参数是一个配置对象
//配置对象中{
//	url设置跳转路径 
//	 之后的路由是状态名和路径跳转
//	abstract抽象该路由 作为根路由 
 
// view设置该视图加载到哪个视图容器中，类型为对象 
// 其中，有一个属性。
//}
    .state('tab', {   //路由状态名
    url: '/tab',   //配置对象
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {//归属于tab下的人home页面
    url: '/home',  //省略tab
     // #/tab/home
    views: {   //设置该视图加载到哪个视图容器中，类型为对象
      'tab-home': {  //容器名字
        templateUrl: 'templates/tab-home.html',  //设置模板页面路径
        controller: 'HomeCtrl'
      }
    }
  })


.state("tab.lunbo",{
    url:"/lunbo",
    views:{
      'tab-home':{
        templateUrl:'templates/tab-lunbo.html',
        controller:'lunboCtrl',
      }
    }
  })
//.state('tab.asd',{
//	url:'/asd',
//	views:{
//		'tab-home':{
//			 templateUrl: 'templates/tab-asd.html',  //设置模板页面路径
//      controller: 'AsdCtrl'
//		}
//	}
//})
  
  .state('tab.lessonlist', {
      url: '/lessonlist',
      // #/tab/lessonlist
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
