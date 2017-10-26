angular.module('boredApp')
.controller('UsersController', ['$scope', 'UsersService', function($scope, UsersService) {

  $scope.UsersService = UsersService;
  $scope.newUser = { username : '' };

  $scope.createUser = function() {
    UsersService.createUser($scope.newUser.username);
    $scope.newUser.username = '';
  };
}]);