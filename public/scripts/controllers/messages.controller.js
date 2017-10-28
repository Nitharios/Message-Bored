angular.module('boredApp')
.controller('MessagesController', ['$scope', '$window', '$routeParams', 'MessagesService', function($scope, $window, $routeParams, MessagesService) {
  $scope.MessagesService = MessagesService;

  $scope.messages = [];
  // on load loads all messages returned by MessagesService
  MessagesService.getMessages($routeParams.id)
  .then(function(messagesList) {
    $scope.messages = messagesList;
  });

  $scope.deleteMessage = function(message_id) {
    MessagesService.deleteMessage(message_id)
    .then(function(response) {
      if (response.success) {
        $window.location.reload();
      }
    });
  };

  $scope.created = function(author_id) {
    return Number(author_id) === Number($window.localStorage.id);
  };
}]);