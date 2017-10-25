angular.module('boredApp')
.service('UsersService', ['$http', function($http) {
    var url = '/api/users';
    var self = this;

    // collection of users
    this.users = [];

    // single user
    this.user = {};

    // initialization
    $http.get(url)
    .then(function(usersList) {
      self.users = usersList.data;
    });

    // read methods
    this.getUsers = function() { return self.users; };

    // create user
    this.createUser = function(details) {
      if (!details) { return; }

      var newUser = { username : details.username };

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
        console.log('New User created', response);
      });
    };

    // get user information
    this.getUserByUsername = function(username) { 
      var userData = self.users.find(function(element) {
        return element.username === username;
      });

      // userData contains full object of info from db
      self.user = userData.username; 
    };
}]);