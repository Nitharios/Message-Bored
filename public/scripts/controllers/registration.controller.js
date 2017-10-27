angular.module('boredApp')
.controller('RegistrationController', ['$scope', 'DashService', 'UsersService', function($scope, DashService, UsersService) {
  $scope.DashService = DashService;
  $scope.UsersService = UsersService;

  var failure = { success : false };

  $scope.users = [];
  $scope.newUser = {
    username : '',
    password : ''
  };

  UsersService.getUsers()
  .then(function(usersList) {
    $scope.users = usersList;
  });

  $scope.createUser = function() {
    if (!$scope.newUser.username) { return; }
    if (!$scope.newUser.password) { return; }
    // check if username already exists
    var userExists = $scope.users.some(function(element) {
      return element.username === $scope.newUser.username;
    });

    if (userExists) { 
      return failure; 
    }
    
    var newUser = { 
      username : $scope.newUser.username,
      password : $scope.newUser.password
    };

    // create on frontend if user does not exist
    // should just log user in if the username is accepted
    $scope.users.push(newUser);

    DashService.createUser(newUser);
    $scope.newUser.username = '';
    $scope.newUser.password = '';
  };
}]);