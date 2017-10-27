angular.module('boredApp')
.controller('LogoutController', ['$scope', 'LogoutService', function($scope, LogoutService) {

  $scope.LogoutService = LogoutService;

}]);