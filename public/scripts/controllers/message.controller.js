angular.module('boredApp')
.controller('NewMessageController', ['$scope', '$routeParams', 'TopicsService', 'MessagesService', function($scope, $routeParams, TopicsService, MessagesService) {
  $scope.TopicsService = TopicsService;
  $scope.MessagesService = MessagesService;

  $scope.topic = { title : '' };
  $scope.messages = [];
  $scope.newMessage = { 
    body : '',
    // placeholder until validations are added
    author_id : 1,
    topic_id : $routeParams.id
  };
  // sets the topic title based on uri ID
  TopicsService.getTopicById($routeParams.id)
  .then(function(topicData) {
    $scope.topic.title = topicData.title;
  });
  // sets the messages associated with the topic ID
  MessagesService.getMessages($routeParams.id)
  .then(function(messagesList) {
    $scope.messages = messagesList;
  });

  $scope.createMessage = function() {
    if (!$scope.newMessage.body) { 
      $scope.newMessage.body = 'You didn\'t write anything!';
      return;
    }

    var newMessage = { 
      body : $scope.newMessage.body,
      author_id : 1,
      topic_id : $routeParams.id
    };
    // create on frontend
    $scope.messages.push(newMessage);
    // create on backend
    MessagesService.createMessage(newMessage);
    $scope.newMessage.body = '';
  };  
}]);