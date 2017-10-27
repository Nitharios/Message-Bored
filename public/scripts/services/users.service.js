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
      .then(function(userDetails) {
        return userDetails.data;
      });
    };
    // create user
    this.createUser = function(newUser) {
      // create on backend
      return $http.post(url, newUser)
      .then(function(response) {
        return ;
      });
    };
}]);