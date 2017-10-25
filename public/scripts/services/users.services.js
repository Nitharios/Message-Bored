angular.module('boredApp')
.service('UsersService', ['$http', function($http) {
    return {
      // returns all the users in the array
      getUsers : function () {
        return $http.get('/api/users')
        .then(function(usersList) {
          console.log('s;ldengfdsnfsdlnf');
          return usersList.data;
        });
      }
    };
}]);