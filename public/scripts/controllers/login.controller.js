angular.module('boredApp')
.controller('LoginController', ['$scope', 'DashService', function($scope, DashService) {

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
      
      } else {
        console.log('Username or Password is incorrect!');
      }
    });
  };
}]);