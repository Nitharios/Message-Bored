angular.module('boredApp')
.service('DashService', ['$http', function($http) {
  var url = '/api/dash';
  var register = url + '/' + 'register';
  var login = url + '/' + 'login';
  var logout = url + '/' + 'logout';

  // register the user
  this.createUser = function(newUser) {
    return $http.post(register, newUser)
    .then(function(response) {
      return(response.data.success);
    });
  };
}]);