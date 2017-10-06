myApp.controller('MyController', function($scope, $mdSidenav, $window) {
   $scope.openLeftMenu = function() {
     $mdSidenav('left').toggle();
   };

   var default_color = {
     "color": "white",
     "border": "solid 5px white",
     "opacity": "1",
     "background-color": "none",
     "font-size": "14px",
     "padding-left": "10px",
     "padding-right": "10px",
     "z-index": 1
   };

   var active_color = {
     "color": 'black',
     "border": "solid 10px white",
     "opacity": "0.5",
     "font-size": "100px",
     "background-color": "white",
     "padding-left": "0",
     "padding-right": "0",
     "z-index": 1
   }

   $scope.color = default_color;

   var restart = false;
  //  var response_redux = function(text) {
  //    setTimeout(function() {
  //      if(!restart) {
  //        $('#work').html(text)
  //      }
  //    }
  //  }

   // Redo this so its modular
   var response = function() {
     if(!restart) {
       setTimeout(function() {
         if(!restart) {
           $('#work').html("Sorry about that I just...(*Ahem)")
           if(!restart) {
             setTimeout(function() {
               if(!restart) {
                 $('#work').html("You know how you can sometimes just get really excited about something that you are super passionate about? Sometimes it gets a little out of hand? No? Okay.")
               }
               if(!restart) {
                 setTimeout(function() {
                   if(!restart) {
                     $('#work').html("See my work");
                   }}, 8000)}

             }, 3000)}
       }}, 1);
     }
   }

   $scope.changeColor = function(bool) {
      if(bool === true) {
          restart = true;
          $scope.color = active_color;
          var work = $("#work");
          work.html("SEE MEH PRETTIES");
          console.log(work)
      } else if (bool === false) {
          restart = false;
          $scope.color = default_color;
          response();
      }
    };




});
