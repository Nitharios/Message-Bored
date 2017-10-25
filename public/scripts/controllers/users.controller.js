angular.module('boredApp')
.controller('UsersController', ['$scope', 'UsersService', function($scope, UsersService) {

  $scope.usersList = [];

  UsersService.getUsers()
  .then(function(usersList) {
    // controller recieves an array from users.services
    $scope.usersList = usersList;
  });
}]);