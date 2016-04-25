myApp
.controller('MyController', function($scope, $mdSidenav, $window) {
   $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
   };


});
