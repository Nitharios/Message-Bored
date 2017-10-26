angular.module('boredApp')
.controller('SingleTopicController', ['$scope', '$routeParams', 'TopicsService', function($scope, $routeParams, TopicsService) {

  $scope.updateTopic = {
    title : ''
  };

  $scope.TopicsService = TopicsService;
  TopicsService.getTopicById($routeParams.id)
  .then(function (topic) {
    $scope.updateTopic.title = topic.title;
  });

}]);