angular.module('boredApp')
.controller('MessagesController', ['$scope', '$routeParams', 'MessagesService', function($scope, $routeParams, MessagesService) {
  $scope.MessagesService = MessagesService;

  $scope.messages = [];
  // on load loads all messages returned by MessagesService
  MessagesService.getMessages($routeParams.id)
  .then(function(messagesList) {
    $scope.messages = messagesList;
  });
}]);