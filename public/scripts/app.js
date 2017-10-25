/* jshint esversion:6 */
angular.module('boredApp', ['ngRoute']);

var boredApp = angular.module('boredApp')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/users', 
  {
    templateUrl : '/views/users.html',
    controller : 'UsersController'
  })
  .otherwise(
  {
    template : '<h1><center>SUCK IT TREBEK</center></h1>'
  });

  // gets rid of #!
  $locationProvider.html5Mode(true);
}]);