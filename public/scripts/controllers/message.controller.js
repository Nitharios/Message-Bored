angular.module('boredApp')
.controller('NewMessageController', ['$scope', '$window', '$routeParams', 'TopicsService', 'MessagesService', function($scope, $window, $routeParams, TopicsService, MessagesService) {
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
      topic_id : $routeParams.id
    };
    // create on backend
    MessagesService.createMessage(newMessage)
    .then(function(response) {
      if (response.success) {
        $window.location.reload();
      }
    });
  };  
}]);