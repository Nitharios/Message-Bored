angular.module('boredApp')
.controller('LoginController', ['$scope', 'DashService', function($scope, DashService) {

  $scope.DashService = DashService;

}]);