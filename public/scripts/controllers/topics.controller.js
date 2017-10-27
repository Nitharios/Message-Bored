angular.module('boredApp')
.controller('TopicsController', ['$scope', 'TopicsService', function($scope, TopicsService) {

  $scope.TopicsService = TopicsService;
  $scope.topics = [];
  $scope.newTopic = { 
    title : '',
    // placeholder until validations are added
    created_by : 1
  };

  TopicsService.getTopics()
  .then(function(topicsList) {
    $scope.topics = topicsList;
  });

  $scope.createTopic = function() {
    if (!$scope.newTopic.title) { return; }

    var newTopic = { 
      title : $scope.newTopic.title,
      created_by : 1
    };
    // check if title already exists
    var topicExists = $scope.topics.some(function(element) {
      return element.title === newTopic.title;
    });
    if (topicExists) return topicExists; 
    // create on frontend if topic does not exist
    $scope.topics.push(newTopic);
    // create on backend    
    TopicsService.createTopic(newTopic);
    $scope.newTopic.title = '';
    $scope.newTopic.created_by = '';
  };
}]);