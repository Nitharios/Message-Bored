angular.module('boredApp')
.controller('SingleTopicController', ['$scope', '$routeParams', 'UsersService', 'TopicsService', 'MessagesService', function($scope, $routeParams, UsersService, TopicsService, MessagesService) {
  $scope.UsersService = UsersService;
  $scope.TopicsService = TopicsService;
  $scope.MessagesService = MessagesService;

  $scope.currentTopic = { title : '' };
  $scope.updatedTopic = { title : '' };
  
  TopicsService.getTopicById($routeParams.id)
  .then(function(topic) {
    $scope.currentTopic.title = topic.title;
  });

  $scope.updateTopicById = function() {
    var update = {
      id : $routeParams.id,
      title : $scope.updatedTopic.title
    };

    TopicsService.updateTopicById(update)
    .then(function(updatedTopic) {
      if (updatedTopic.success) {
        $scope.currentTopic.title = $scope.updatedTopic.title;
      }
    });
  };
}]);