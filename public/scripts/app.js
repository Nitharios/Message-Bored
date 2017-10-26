/* jshint esversion:6 */
angular.module('boredApp', ['ngRoute']);

var boredApp = angular.module('boredApp')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    templateUrl : '/views/home.html'
  })
  .when('/users', 
  {
    templateUrl : '/views/users.html',
    controller : 'UsersController'
  })
  .when('/users/:username',
  {
    templateUrl : '/views/user.html',
    controller : 'SingleUserController'
  })
  .when('/topics',
  {
    templateUrl : '/views/topics.html',
    controller : 'TopicsController'
  })
  .when('/topics/:id',
  {
    templateUrl : '/views/topic.html',
    controller : 'SingleTopicController'
  })
  .when('/messages/latest',
  {
    templateUrl : '/views/messages.html',
    controller : 'MessagesController'
  })
  .otherwise(
  {
    template : '<h1><center>SUCK IT TREBEK</center></h1>'
  });

  // gets rid of #!
  $locationProvider.html5Mode(true);
}]);