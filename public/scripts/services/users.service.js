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
      if (!username) { return; }

      var newUser = { username : username };
      // check if username already exists
      // var userExists = self.users.some(function(element) {
      //   return element.username === newUser.username;
      // });

      // if (userExists) return userExists; 
      // create on frontend if user does not exist
      self.users.push(newUser);
      // create on backend
      return $http.post(url, newUser)
      .then(function(response) {
        return;
      });
    };
}]);