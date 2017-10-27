angular.module('boredApp')
.controller('UsersController', ['$scope', 'UsersService', function($scope, UsersService) {

  $scope.UsersService = UsersService;

  $scope.users = [];
  $scope.newUser = { username : '' };

  UsersService.getUsers()
  .then(function(usersList) {
    $scope.users = usersList;
  });

  $scope.createUser = function() {
    if (!$scope.newUser.username) { return; }
    // check if username already exists
    var userExists = $scope.users.some(function(element) {
      return element.username === $scope.newUser.username;
    });

    if (userExists) { return; }
    
    var newUser = { username : $scope.newUser.username };
    // create on frontend if user does not exist
    $scope.users.push(newUser);

    UsersService.createUser(newUser);
    $scope.newUser.username = '';
  };
}]);