myApp.controller('HomeController', function($scope, $mdSidenav, $window) {
   $scope.openLeftMenu = function() {
     $mdSidenav('left').toggle();
   };

   var default_color = {
     "color": "black",
     "border": "solid 3px black",
     "opacity": "0.7",
     "background-color": "white",
     "font-size": "14px",
     "padding-left": "10px",
     "padding-right": "10px",
     "z-index": 1
   };

   var active_color = {
     "color": 'black',
     "border": "solid 10px black",
     "opacity": "0.7",
     "font-size": "50px",
     "background-color": "white",
     "padding-left": "15px",
     "padding-right": "15px",
     "margin-top": "-100px",
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
          var work = $("#work");
          work.html("SEE MEH PRETTIES");
          $scope.color = active_color;
          console.log(work)
      } else if (bool === false) {
          restart = false;
          $scope.color = default_color;
          response();
      }
    };
});
