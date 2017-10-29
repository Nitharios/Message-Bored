angular.module('boredApp')
.controller('NavController', ['$scope', 'DashService', function($scope, DashService) {

  $scope.DashService = DashService;

  $scope.isUserLoggedIn = function() {
    return DashService.isUserLoggedIn();
  };

  $scope.getUsername = function() {
    return localStorage.getItem('username');
  };
}]);