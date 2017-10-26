angular.module('boredApp')
.controller('NewMessageController', ['$scope', '$routeParams', 'TopicsServices', 'MessagesService', function($scope, $routeParams, TopicsServices, MessagesService) {

  $scope.TopicsServices = TopicsServices;
  $scope.MessagesService = MessagesService;
  $scope.newMessage = { 
    body : '',
    // placeholder until validations are added
    author_id : 1,
    topic_id : $routeParams.id
  };

  $scope.createMessage = function() {
    MessagesService.createMessage($scope.newMessage.body, $scope.newMessage.author_id, $routeParams.id);
    $scope.newMessage.body = '';
  };
}]);