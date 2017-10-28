angular.module('boredApp')
.controller('DisplayController', ['$scope', '$window', '$location', function($scope, $window, $location) {

  $scope.isUserLoggedIn = function() {
    // console.log('display');
    return localStorage.getItem('isLoggedIn') === 'true';
  };
}]);