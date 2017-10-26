angular.module('boredApp')
.controller('SingleUserController', ['$scope', '$routeParams', 'UsersService', function($scope, $routeParams, UsersService) {

  $scope.UsersService = UsersService;
  UsersService.getUserByUsername($routeParams.username);

}]);