angular.module('boredApp')
.controller('RegistrationController', ['$scope', '$location', 'DashService', 'UsersService', function($scope, $location, DashService, UsersService) {
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


    DashService.createUser(newUser)
    .then(function(response) {
      // should just log user in if the username is accepted
      if (response.success) {
        $location.path('/dash/login');
      }
    });
  };
}]);