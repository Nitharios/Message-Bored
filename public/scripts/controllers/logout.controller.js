angular.module('boredApp')
.controller('LogoutController', ['$scope', '$window', 'DashService', function($scope, $window, DashService) {
  
  $scope.DashService = DashService;

  DashService.logoutUser()
  .then(function(response) {
    if (response.success) {
      DashService.clearUser();
    }
  });
}]);