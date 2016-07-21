angular.module('starter.LoginCtrl', [])
.controller('LoginCtrl', function($scope, $location) {
 console.log("login ctrl ");
 $scope.fb = function () {
            console.log("fb login");
                    $location.path('/app/category');

                }

/*
ionic.Platform.ready(function() {
    // hide the status bar using the StatusBar plugin
    StatusBar.hide();
  });
*/
})