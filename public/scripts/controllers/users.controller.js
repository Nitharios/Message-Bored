angular.module('boredApp')
.controller('UsersController', ['$scope', 'UsersService', function($scope, UsersService) {

  $scope.UsersService = UsersService;

  $scope.users = [];
  $scope.newUser = { username : '' };

  UsersService.getUsers()
  .then(function(usersList) {
    $scope.users = usersList;
  });
}]);