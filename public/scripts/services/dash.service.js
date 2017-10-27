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
      return(response.data);
    });
  };

  this.loginUser = function(userInfo) {
    return $http.post(login, userInfo)
    .then(function(response) {
      if (response.data.success) {
        var userDetails = {
          id : response.data.id,
          username : response.data.username,
          success : true
        };

        return userDetails;
      
      } else {
        return response.data;
      }
    });
  };

  this.logoutUser = function() {
    return $http.get(logout)
    .then(function(response) {
      return response.data;
    });
  };

  this.setUser = function(details) {
    localStorage.setItem('id', details.id);
    localStorage.setItem('username', details.username);
    localStorage.setItem('isLoggedIn', details.success);
  };

  this.clearUser = function() {
    localStorage.clear();
  };
}]);