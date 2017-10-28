angular.module('boredApp')
.controller('SingleTopicController', ['$scope', '$routeParams', '$location', 'UsersService', 'TopicsService', function($scope, $routeParams, $location, UsersService, TopicsService) {
  $scope.UsersService = UsersService;
  $scope.TopicsService = TopicsService;

  $scope.currentTopic = { title : '' };
  $scope.updatedTopic = { title : '' };
  $scope.message = { body : '' };
  
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
    .then(function(response) {
      if (response.success) {
        $location.path('/topics');
      } else {
        $scope.message.body = 'This topic already exists!';
      }
    });
  };

  $scope.deleteTopic = function() {
    TopicsService.deleteTopic($routeParams.id)
    .then(function(response) {
      if (response.success) {
        $location.path('/topics');
      } 
    });
  };
}]);