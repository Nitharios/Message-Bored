angular.module('boredApp')
.service('UsersService', ['$http', function($http) {
    return {
      // returns all the users in the array
      getUsers : function () {
        return $http.get('/api/users')
        .then(function(usersList) {
          console.log('xcmkvckvmx,ckvckvv', usersList.data);
          // returns an array
          return usersList.data;
        });
      }
    };
}]);