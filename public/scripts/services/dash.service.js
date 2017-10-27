angular.module('boredApp')
.service('DashService', ['$http', function($http) {
  var url = '/api/dash';
  var register = url + '/' + 'register';
  var login = url + '/' + 'login';
  var logout = url + '/' + 'logout';
  var self = this;

  // register the user
  this.createUser = function(newUser) {
    return $http.post(register, newUser)
    .then(function(response) {
      return(response.data.success);
    });
  };

  this.loginUser = function(userInfo) {
    return $http.post(login, userInfo)
    .then(function(response) {

      // console.log(response.data)
      
      if (response.data.success) {
        var userDetails = {
          userId : response.data.id,
          username : response.data.username,
          success : true
        };

        return userDetails;
      
      } else {
        return response.data;
      }
    });
  };

  this.setUser = function(details) {
    localStorage.setItem('userId', details.userId);
    localStorage.setItem('username', details.username);
    localStorage.setItem('isLoggedIn', details.success);
  };
}]);