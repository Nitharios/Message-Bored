angular.module('boredApp')
.controller('NavBarController', ['$scope', '$window', '$location', function($scope, $window, $location) {

  $scope.user = { loggedIn : false };

  console.log(typeof $window.localStorage.isLoggedIn);

  if (localStorage.getItem($window.localStorage.isLoggedIn) === true) {
    console.log('here');
    $scope.user.loggedIn = true;
  }
}]);