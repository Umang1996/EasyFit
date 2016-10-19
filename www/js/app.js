// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','fp_controllers','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

    .state('novicePage',{
      url:'/novicePage',
      templateUrl:'templates/novice.html',
      controller:'noviceController'
    })
    .state('middlePage',{
      url:'/middlePage',
      templateUrl:'templates/middle.html',
      controller:'middleController'
    })
    .state('start',{
      url:'/start',
      templateUrl:'templates/start.html',
      controller:'startController'
    })
    .state('proPage',{
      url:'/proPage',
      templateUrl:'templates/professional.html',
      controller:'proController'
    })
    .state('settings',{
      url:'/settings',
      templateUrl:'templates/settings.html',
      controller:'settingsController'
    })
    .state('about',{
      url:'/about',
      templateUrl:'templates/about.html',
      controller:'aboutUsController'
    })
  ;
  $urlRouterProvider.otherwise('start');
});
