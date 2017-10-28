angular.module('boredApp')
.controller('LoginController', ['$scope', '$location', 'DashService', function($scope, $location, DashService) {

  $scope.DashService = DashService;
  $scope.userDetails = {
    username : '',
    password : ''
  };

  $scope.loginUser = function() {
    var userInfo = {
      username : $scope.userDetails.username,
      password : $scope.userDetails.password
    };

    DashService.loginUser(userInfo)
    .then(function(response) {
      if (response.success) {
        DashService.setUser(response);
        $location.path('/topics');

      } else {
        return response.success;
      }
    });
  };
}]);