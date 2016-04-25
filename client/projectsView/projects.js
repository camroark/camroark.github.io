myApp
.controller('projectsCtrl', function ($scope){
   $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
   };
});
