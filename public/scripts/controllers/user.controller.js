angular.module('boredApp')
.controller('SingleUserController', ['$scope', '$routeParams', 'UsersService', 'MessagesService', function($scope, $routeParams, UsersService, MessagesService) {
  $scope.UsersService = UsersService;
  $scope.MessagesService = MessagesService;

  $scope.userMessages = [];
  $scope.user = {
    id : '',
    username : '',
    createdAt : '',
    role : ''
  };

  UsersService.getUserByUsername($routeParams.username)
  .then(function(userDetails) {
    $scope.user.id = userDetails.id;
    $scope.user.username = userDetails.username;
    $scope.user.createdAt = userDetails.createdAt;
    $scope.user.role = userDetails.role;
  
    MessagesService.getMessagesByUser($scope.user.id)
    .then(function(userMessages) {
      $scope.userMessages = userMessages;
    });
  });
}]);