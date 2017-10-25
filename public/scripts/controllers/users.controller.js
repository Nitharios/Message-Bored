angular.module('boredApp')
.controller('UsersController', ['$scope', 'UsersService', function($scope, UsersService) {

  $scope.usersList = [];

  UsersService.getUsers()
  .then(function(usersList) {
    console.log('siwjurwijurqojurowjur', usersList);
    $scope.usersList = usersList;
  });
}]);