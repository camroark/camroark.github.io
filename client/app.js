var myApp = angular.module('cameronroark', ['ngRoute'])
//Router Config
.config(function (['$routeProvider'],
   function($routeProvider) {
      console.log('routeProvider: ', routeProvider);
      $routeProvider.
         when('/', {
            templateUrl: './homeView/home.html',
            controller: './homeView/home.js'
         });
   }
));
//
// .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
//     cfpLoadingBarProvider.includeSpinner = false;
//   }]);
//
//   phonecatApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/phones', {
//         templateUrl: 'partials/phone-list.html',
//         controller: 'PhoneListCtrl'
//       }).
//       when('/phones/:phoneId', {
//         templateUrl: 'partials/phone-detail.html',
//         controller: 'PhoneDetailCtrl'
//       }).
//       otherwise({
//         redirectTo: '/phones'
//       });
//   }]);
