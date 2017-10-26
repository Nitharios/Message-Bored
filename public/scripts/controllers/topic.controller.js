angular.module('boredApp')
.controller('SingleTopicController', ['$scope', '$routeParams', 'TopicsService', function($scope, $routeParams, TopicsService) {

  $scope.updatedTopic = {
    title : ''
  };

  $scope.TopicsService = TopicsService;
  
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
}]);