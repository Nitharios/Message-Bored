angular.module('boredApp')
.controller('SingleTopicController', ['$scope', '$routeParams', 'TopicsService', 'MessagesService', 'UsersService', function($scope, $routeParams, TopicsService, MessagesService, UsersService) {

  $scope.updatedTopic = {
    title : ''
  };

  $scope.newMessage = { 
    body : '',
    // placeholder until validations are added
    author_id : 1,
    topic_id : $routeParams.id
  };

  $scope.TopicsService = TopicsService;
  $scope.MessagesService = MessagesService;
  $scope.UsersService = UsersService;
  
  TopicsService.getTopicById($routeParams.id)
  .then(function(topic) {
    $scope.updatedTopic.title = topic.title;
  });

  $scope.updateTopicById = function() {
    TopicsService.updateTopicById($routeParams.id, $scope.updatedTopic.title)
    .then(function(updatedTopic) {
      console.log(updatedTopic);
      $scope.updatedTopic.title = $scope.updatedTopic.title;
    });
  };

  $scope.createMessage = function() {
    MessagesService.createMessage($scope.newMessage.body, $scope.newMessage.author_id, $routeParams.id);
    $scope.newMessage.body = '';
  };
}]);