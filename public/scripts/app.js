/* jshint esversion:6 */
angular.module('boredApp', ['ngRoute']);

var boredApp = angular.module('boredApp')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    templateUrl : '/views/home.html'
  })
  .when('/register', {
    templateUrl : '/views/registration.html',
    controller : 'RegistrationController'
  })
  .when('/login', {
    templateUrl : '/views/login.html',
    controller : 'LoginController'
  })
  .when('/logout', {
    redirectTo : '/'
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
  .when('/messages/latest',
  {
    templateUrl : '/views/messages.html',
    controller : 'MessagesController'
  })
  .when('/messages/by-topic/:id',
  {
    templateUrl : '/views/messages-by-topic.html',
    controller : 'NewMessageController'
  })
  .otherwise(
  {
    template : '<h1><center>SUCK IT TREBEK</center></h1>'
  });

  // gets rid of #!
  $locationProvider.html5Mode(true);
}]);