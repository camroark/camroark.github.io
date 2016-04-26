myApp
.controller('projectsCtrl', function ($scope){
   $scope.openLeftMenu = function () {
      $mdSidenav('left').toggle();
   };

   // Filter
   $scope.searchParty = ['Angular2', 'Ionic', 'Node.js', 'Express', 'API\'s', 'Neo4j'];
   $scope.lunchLine = ['AngularJS', 'Node.js', 'Express', 'API\'s', 'MongoDB'];
   $scope.drivewayShare = ['AngularJS', 'Node.js', 'Express', 'SQL'];

   $scope.filter = function (project) {
      var techList;
      if(project === 'searchParty') {
         techList = $scope.searchParty;
      } else if (project === 'lunchline') {
         techList = $scope.lunchLine;
      } else if (project === 'drivewayShare') {
         techList = $scope.drivewayShare;
      }
      var techItems = [];
      

   }


});
