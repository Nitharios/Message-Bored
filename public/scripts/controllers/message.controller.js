angular.module('boredApp')
.controller('NewMessageController', ['$scope', '$routeParams', 'TopicsService', 'MessagesService', function($scope, $routeParams, TopicsService, MessagesService) {
  $scope.MessagesService = MessagesService;
  $scope.TopicsService = TopicsService;

  $scope.topic = {
    title : ''
  };
  
  $scope.messages = [];

  $scope.newMessage = { 
    body : '',
    // placeholder until validations are added
    author_id : 1,
    topic_id : $routeParams.id
  };

  TopicsService.getTopicById($routeParams.id)
  .then(function(topicData) {
    $scope.topic.title = topicData.title;
  });

  MessagesService.getMessages($routeParams.id)
  .then(function(messagesList) {
    $scope.messages = messagesList;
  });

  $scope.createMessage = function() {
    MessagesService.createMessage($scope.newMessage.body, $scope.newMessage.author_id, $routeParams.id);
    $scope.newMessage.body = '';
  };

  
}]);