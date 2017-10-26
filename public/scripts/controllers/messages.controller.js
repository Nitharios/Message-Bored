angular.module('boredApp')
.controller('MessagesController', ['$scope', '$routeParams', 'MessagesService', function($scope, $routeParams, MessagesService) {
  $scope.MessagesService = MessagesService;

  $scope.messages = [];

  MessagesService.getMessages($routeParams.id)
  .then(function(messagesList) {
    $scope.messages = messagesList;
  });
}]);