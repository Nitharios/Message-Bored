angular.module('boredApp')
.controller('UsersController', ['$scope', 'UsersService', function($scope, UsersService) {

  $scope.UsersService = UsersService;
  $scope.newUser = { name : '' };

  $scope.createUser = function(e) {
    UsersService.createUser($scope.newUser);
    $scope.newUser.name = '';
  };
}]);