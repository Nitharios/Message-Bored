angular.module('boredApp')
.service('UsersService', ['$http', function($http) {
    var url = '/api/users';
    var self = this;
    // collection of users
    // read methods
    this.getUsers = function() { 
      return $http.get(url)
      .then(function(usersList) {
        return usersList.data;
      }); 
    };
    // get user information
    // should first check if user exists
    this.getUserByUsername = function(username) { 
      return $http.get(url + '/' + username)
      .then(function(userData) {
        return userData.data;
      });
    };
    // create user
    this.createUser = function(username) {
      // create on backend
      return $http.post(url, username)
      .then(function(response) {
        return;
      });
    };
}]);