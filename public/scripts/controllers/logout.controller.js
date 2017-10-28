angular.module('boredApp')
.controller('LogoutController', ['$scope', 'DashService', function($scope, DashService) {
  
  $scope.DashService = DashService;

  DashService.logoutUser()
  .then(function(response) {
    if (response.success) {
      DashService.clearUser();
    }
  });
}]);