var myApp = angular.module('personalWebsite', ['ngMaterial', 'ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('homeView', {
         url: '/home',
         templateUrl: './homeView/home.html',
         controller: 'MyController'
      })
      .state('projectsView', {
         url: '/projects',
         templateUrl: './projectsView/projects.html',
         controller: 'projectsCtrl'
      })
      .state('aboutView', {
         url: '/about',
         templateUrl: './aboutView/about.html',
         controller: 'aboutCtrl'
      });
      
      $urlRouterProvider.otherwise('/home');
})
