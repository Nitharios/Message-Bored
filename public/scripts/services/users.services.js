angular.module('boredApp')
.service('UsersService', ['$http', function($http) {
    var url = '/api/users';
    var self = this;

    // collection of users
    this.users = [];

    // single user
    this.user = {};

    // initialization of usersList
    $http.get(url)
    .then(function(usersList) {
      self.users = usersList.data;
    });

    // read methods
    this.getUsers = function() { return self.users; };

    // create user
    this.createUser = function(username) {
      if (!username) { return; }

      var newUser = { username : username };

      // check if username already exists
      var userExists = self.users.some(function(element) {
        return element.username === newUser.username;
      });

      if (userExists) return userExists; 

      // create on frontend if user does not exist
      self.users.push(newUser);

      // create on backend
      $http.post(url, newUser)
      .then(function(response) {
        return;
      });
    };

    // get user information
    // should first check if user exists
    this.getUserByUsername = function(username) { 
      $http.get(url + '/' + username)
      .then(function(userData) {
        self.user = userData.data;
      });
    };
}]);