angular.module('boredApp')
.service('UsersService', ['$http', function($http) {
    return {
      // returns all the users in the array
      getUsers : function () {
        return $http.get('/api/users')
        .then(function(usersList) {
          // returns an array
          return usersList.data;
        });
      }
    };
}]);