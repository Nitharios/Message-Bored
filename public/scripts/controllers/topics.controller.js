angular.module('boredApp')
.controller('TopicsController', ['$scope', '$window', 'UsersService', 'TopicsService', function($scope, $window, UsersService, TopicsService) {

  $scope.UsersService = UsersService;
  $scope.TopicsService = TopicsService;
  $scope.topics = [];
  $scope.newTopic = { 
    title : '',
    // placeholder until validations are added
    created_by : $window.localStorage.username
  };

  var failure = { success : false };

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

    if (topicExists) return failure; 

    var newTopic = { 
      title : $scope.newTopic.title,
    };
    // create on backend if topic does not exists
    TopicsService.createTopic(newTopic)
    .then(function(response) {
      // create on frontend if backend is successful
      if (response.success) {
        $window.location.reload();
      }
    });
  };

  $scope.created = function(id) {
    return Number(id) === Number($window.localStorage.id);
  };
}]);