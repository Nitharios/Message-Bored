angular.module('boredApp')
.service('UsersService', ['$http', function($http) {
    var url = '/api/users';
    var self = this;

    // collection of users
    this.users = [];

    // initialization
    $http.get(url)
    .then(function(usersList) {
      self.users = usersList.data;
    });

    // read methods
    this.getUsers = function() { return users; };
    this.getUser = function(username) { return users; };

    // create user
    this.createUser = function(username) {
      if (!username) { return; }
    
      // create on frontend
      var newUser = { username : username };
      self.users.push(newUser);

      // create on backend
      $http.post(url, newUser)
      .then(function(response) {
        console.log('New User created', response);
      });
    };
}]);