angular.module('boredApp')
.controller('LoginController', ['$scope', 'LoginService', function($scope, LoginService) {

  $scope.LoginService = LoginService;

}]);