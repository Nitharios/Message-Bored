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
    // check if title already exists
    var topicExists = $scope.topics.some(function(element) {
      return element.title === $scope.newTopic.title;
    });

    if (topicExists) return topicExists; 

    var newTopic = { 
      title : $scope.newTopic.title,
      created_by : 1
    };
    
    // create on backend if topic does not exists
    TopicsService.createTopic(newTopic)
    .then(function(response) {
      // create on frontend if backend is successful
      if (response.success) $scope.topics.push(newTopic);
    });
    $scope.newTopic.title = '';
    $scope.newTopic.created_by = '';
  };
}]);