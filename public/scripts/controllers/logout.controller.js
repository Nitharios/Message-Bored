angular.module('boredApp')
.controller('LogoutController', ['$scope', 'DashService', function($scope, DashService) {

  $scope.DashService = DashService;

}]);