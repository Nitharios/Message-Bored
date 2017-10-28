angular.module('boredApp')
.controller('NavBarController', ['$scope', '$window', '$location', function($scope, $window, $location) {

  $scope.isUserLoggedIn = function() {
    return localStorage.getItem('isLoggedIn') === 'true';
  };
}]);