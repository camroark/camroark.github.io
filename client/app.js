var myApp = angular.module('personalWebsite', ['ngMaterial', 'ngRoute']);

myApp.config(function($routeProvider) {
   $routeProvider
      .when('/', {
        url: "/home",
        templateUrl: './homeView/home.html'
      })
      .when('/projects', {
         url: '/projects',
         templateUrl: './projectsView/projects.html'
      })
      .otherwise({
        url: "/",
        templateUrl: './homeView/home.html'
      })
});
