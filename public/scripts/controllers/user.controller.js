angular.module('boredApp')
.controller('SingleUserController', ['$scope', '$routeParams', 'UsersService', function($scope, $routeParams, UsersService) {

  $scope.UsersService = UsersService;
  $scope.UsersService.user = $routeParams;

}]);