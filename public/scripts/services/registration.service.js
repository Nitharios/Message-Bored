angular.module('boredApp')
.service('RegistrationService', ['$http', function($http) {
  var url = '/api/register';

  // register the user
  this.createUser = function (newUser) {
    return $http.post(url, newUser)
    .then(function(response) {
      res.json('User created successfully');
    });
  };
}]);